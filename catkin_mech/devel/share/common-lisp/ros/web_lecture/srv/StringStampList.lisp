; Auto-generated. Do not edit!


(cl:in-package web_lecture-srv)


;//! \htmlinclude StringStampList-request.msg.html

(cl:defclass <StringStampList-request> (roslisp-msg-protocol:ros-message)
  ()
)

(cl:defclass StringStampList-request (<StringStampList-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <StringStampList-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'StringStampList-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name web_lecture-srv:<StringStampList-request> is deprecated: use web_lecture-srv:StringStampList-request instead.")))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <StringStampList-request>) ostream)
  "Serializes a message object of type '<StringStampList-request>"
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <StringStampList-request>) istream)
  "Deserializes a message object of type '<StringStampList-request>"
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<StringStampList-request>)))
  "Returns string type for a service object of type '<StringStampList-request>"
  "web_lecture/StringStampListRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'StringStampList-request)))
  "Returns string type for a service object of type 'StringStampList-request"
  "web_lecture/StringStampListRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<StringStampList-request>)))
  "Returns md5sum for a message object of type '<StringStampList-request>"
  "2e57eb5ee95c0a584fb520d98705f88b")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'StringStampList-request)))
  "Returns md5sum for a message object of type 'StringStampList-request"
  "2e57eb5ee95c0a584fb520d98705f88b")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<StringStampList-request>)))
  "Returns full string definition for message of type '<StringStampList-request>"
  (cl:format cl:nil "~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'StringStampList-request)))
  "Returns full string definition for message of type 'StringStampList-request"
  (cl:format cl:nil "~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <StringStampList-request>))
  (cl:+ 0
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <StringStampList-request>))
  "Converts a ROS message object to a list"
  (cl:list 'StringStampList-request
))
;//! \htmlinclude StringStampList-response.msg.html

(cl:defclass <StringStampList-response> (roslisp-msg-protocol:ros-message)
  ((list
    :reader list
    :initarg :list
    :type (cl:vector web_lecture-msg:StringStamp)
   :initform (cl:make-array 0 :element-type 'web_lecture-msg:StringStamp :initial-element (cl:make-instance 'web_lecture-msg:StringStamp))))
)

(cl:defclass StringStampList-response (<StringStampList-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <StringStampList-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'StringStampList-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name web_lecture-srv:<StringStampList-response> is deprecated: use web_lecture-srv:StringStampList-response instead.")))

(cl:ensure-generic-function 'list-val :lambda-list '(m))
(cl:defmethod list-val ((m <StringStampList-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader web_lecture-srv:list-val is deprecated.  Use web_lecture-srv:list instead.")
  (list m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <StringStampList-response>) ostream)
  "Serializes a message object of type '<StringStampList-response>"
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'list))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (roslisp-msg-protocol:serialize ele ostream))
   (cl:slot-value msg 'list))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <StringStampList-response>) istream)
  "Deserializes a message object of type '<StringStampList-response>"
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'list) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'list)))
    (cl:dotimes (i __ros_arr_len)
    (cl:setf (cl:aref vals i) (cl:make-instance 'web_lecture-msg:StringStamp))
  (roslisp-msg-protocol:deserialize (cl:aref vals i) istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<StringStampList-response>)))
  "Returns string type for a service object of type '<StringStampList-response>"
  "web_lecture/StringStampListResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'StringStampList-response)))
  "Returns string type for a service object of type 'StringStampList-response"
  "web_lecture/StringStampListResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<StringStampList-response>)))
  "Returns md5sum for a message object of type '<StringStampList-response>"
  "2e57eb5ee95c0a584fb520d98705f88b")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'StringStampList-response)))
  "Returns md5sum for a message object of type 'StringStampList-response"
  "2e57eb5ee95c0a584fb520d98705f88b")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<StringStampList-response>)))
  "Returns full string definition for message of type '<StringStampList-response>"
  (cl:format cl:nil "web_lecture/StringStamp[] list~%~%================================================================================~%MSG: web_lecture/StringStamp~%time stamp~%string data~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'StringStampList-response)))
  "Returns full string definition for message of type 'StringStampList-response"
  (cl:format cl:nil "web_lecture/StringStamp[] list~%~%================================================================================~%MSG: web_lecture/StringStamp~%time stamp~%string data~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <StringStampList-response>))
  (cl:+ 0
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'list) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ (roslisp-msg-protocol:serialization-length ele))))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <StringStampList-response>))
  "Converts a ROS message object to a list"
  (cl:list 'StringStampList-response
    (cl:cons ':list (list msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'StringStampList)))
  'StringStampList-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'StringStampList)))
  'StringStampList-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'StringStampList)))
  "Returns string type for a service object of type '<StringStampList>"
  "web_lecture/StringStampList")