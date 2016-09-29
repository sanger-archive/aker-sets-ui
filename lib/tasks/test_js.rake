namespace :test do
  desc "Run all javascript tests"
  task :js do
    puts `npm test`
  end

  desc "Run all of the tests!"
  task :all do
    `npm run-script dev-compile`
    Rake::Task["spec"].invoke
    Rake::Task["test:js"].invoke
  end
end
