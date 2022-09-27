Pod::Spec.new do |s|
  s.name             = 'SpeechlyAPI'
  s.version          = '0.1.0'
  s.summary          = 'Definitions and generated code for Speechly public APIs.'


  s.homepage         = 'https://github.com/speechly/api'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { :name => 'Speechly' }
  s.source           = { :git => 'https://github.com/speechly/api.git', :tag => s.version.to_s }

  s.ios.deployment_target = '12.0'
  s.swift_version = '5.7'

  s.source_files = 'Sources/SpeechlyAPI/*'
  
  s.dependency 'SwiftNIO', '~> 2.40.0'
  s.dependency 'gRPC-Swift', '~> 1.8.0'
end
