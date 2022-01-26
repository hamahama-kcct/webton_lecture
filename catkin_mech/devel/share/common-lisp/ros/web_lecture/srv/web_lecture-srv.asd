
(cl:in-package :asdf)

(defsystem "web_lecture-srv"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :web_lecture-msg
)
  :components ((:file "_package")
    (:file "StringStampList" :depends-on ("_package_StringStampList"))
    (:file "_package_StringStampList" :depends-on ("_package"))
  ))