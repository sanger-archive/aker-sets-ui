namespace :webpack do
  desc 'compiles js assets using webpack'
  task :compile do
    cmd = './node_modules/.bin/webpack --config webpack.prod.config.js --json'
    output = `#{cmd}`

    stats = JSON.parse(output)

    File.open('./public/set-shaper/assets/webpack-asset-manifest.json', 'w') do |f|
      f.write stats['assetsByChunkName'].to_json
    end
  end
end