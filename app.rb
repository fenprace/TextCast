require "sinatra"
set :public_folder, File.dirname(__FILE__)

get '/' do
  call env.merge("PATH_INFO" => '/index.html')
end