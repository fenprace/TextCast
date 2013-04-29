require 'json'

# Constants
Source_dir = "#{File.dirname(__FILE__)}/source"
Data_dir = "#{File.dirname(__FILE__)}/data"
Metadata_file = "#{Data_dir}/metadata.json"

# Preparing
mkdir Source_dir unless File.exist?(Source_dir)
mkdir Data_dir unless File.exist?(Data_dir)

# Functions
class String
  def legal?
    self =~ /\S/
  end
end

def check(str)
  unless str.legal?
    abort("rake aborted! Illegal Arguments.")
  end
  str
end

def get_stdin(message)
  print message
  check STDIN.gets.chomp
end

def touch(file)
  system "touch #{file}"
end

# Tasks
desc "Launch a static server"
task :server do
  ruby '-e', <<-CODE
    require 'sinatra'
    set :public_folder, File.dirname(__FILE__)
    get '/' do
      call env.merge('PATH_INFO' => '/index.html')
    end
  CODE
end

namespace :post do
  desc "Create a new post"
  task :new, [:title, :url] do |t, args|
    title = args.title ? args.title : get_stdin("Enter a title for the new post: ")
    url = args.url ? args.url : get_stdin("Enter a short url for the new post: ")
    hash = {:title => title, :url => url}

    touch "#{Source_dir}/#{url}.md"

    File.open("#{Data_dir}/#{url}.json", "w") do |f|
      f.write(hash.to_json)
    end

    File.open(Metadata_file, "r") do |f|
      hash = JSON.parse(f.read) << hash
    end

    File.open(Metadata_file, "w") do |f|
      f.write(hash.to_json)
    end
  end
end