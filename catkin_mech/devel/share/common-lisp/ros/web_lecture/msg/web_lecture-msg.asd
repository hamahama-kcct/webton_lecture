
(cl:in-package :asdf)

(defsystem "web_lecture-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "StringStamp" :depends-on ("_package_StringStamp"))
    (:file "_package_StringStamp" :depends-on ("_package"))
  ))