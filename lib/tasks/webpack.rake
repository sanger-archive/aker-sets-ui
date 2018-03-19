namespace :webpack do
  desc 'compiles js assets using webpack'
  task :compile do
    Rake::Task["assets:precompile"].invoke
    
    cmd = './node_modules/.bin/webpack --config webpack.prod.config.js --json'
    output = `#{cmd}`

    stats = JSON.parse(output)

    File.open('./public/assets/webpack-asset-manifest.json', 'w') do |f|
      f.write stats['assetsByChunkName'].to_json
    end
  end
end