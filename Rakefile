desc "Launch a static server"
task :server do
  code = <<-CODE
  require 'sinatra'
  set :public_folder, File.dirname(__FILE__)
  get '/' do
    call env.merge('PATH_INFO' => '/index.html')
  end
  run Sinatra::Application
  CODE

  exec "rackup -b \"#{code}\""
end

