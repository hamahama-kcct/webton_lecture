; Auto-generated. Do not edit!


(cl:in-package web_lecture-msg)


;//! \htmlinclude StringStamp.msg.html

(cl:defclass <StringStamp> (roslisp-msg-protocol:ros-message)
  ((stamp
    :reader stamp
    :initarg :stamp
    :type cl:real
    :initform 0)
   (data
    :reader data
    :initarg :data
    :type cl:string
    :initform ""))
)

(cl:defclass StringStamp (<StringStamp>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <StringStamp>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'StringStamp)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name web_lecture-msg:<StringStamp> is deprecated: use web_lecture-msg:StringStamp instead.")))

(cl:ensure-generic-function 'stamp-val :lambda-list '(m))
(cl:defmethod stamp-val ((m <StringStamp>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader web_lecture-msg:stamp-val is deprecated.  Use web_lecture-msg:stamp instead.")
  (stamp m))

(cl:ensure-generic-function 'data-val :lambda-list '(m))
(cl:defmethod data-val ((m <StringStamp>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader web_lecture-msg:data-val is deprecated.  Use web_lecture-msg:data instead.")
  (data m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <StringStamp>) ostream)
  "Serializes a message object of type '<StringStamp>"
  (cl:let ((__sec (cl:floor (cl:slot-value msg 'stamp)))
        (__nsec (cl:round (cl:* 1e9 (cl:- (cl:slot-value msg 'stamp) (cl:floor (cl:slot-value msg 'stamp)))))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __sec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __sec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __sec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __sec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 0) __nsec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __nsec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __nsec) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __nsec) ostream))
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'data))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'data))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <StringStamp>) istream)
  "Deserializes a message object of type '<StringStamp>"
    (cl:let ((__sec 0) (__nsec 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __sec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __sec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __sec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __sec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 0) __nsec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __nsec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __nsec) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __nsec) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'stamp) (cl:+ (cl:coerce __sec 'cl:double-float) (cl:/ __nsec 1e9))))
    (cl:let ((__ros_str_len 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'data) (cl:make-string __ros_str_len))
      (cl:dotimes (__ros_str_idx __ros_str_len msg)
        (cl:setf (cl:char (cl:slot-value msg 'data) __ros_str_idx) (cl:code-char (cl:read-byte istream)))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<StringStamp>)))
  "Returns string type for a message object of type '<StringStamp>"
  "web_lecture/StringStamp")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'StringStamp)))
  "Returns string type for a message object of type 'StringStamp"
  "web_lecture/StringStamp")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<StringStamp>)))
  "Returns md5sum for a message object of type '<StringStamp>"
  "37670eed6af64f24a40b9b9fc1cb861e")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'StringStamp)))
  "Returns md5sum for a message object of type 'StringStamp"
  "37670eed6af64f24a40b9b9fc1cb861e")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<StringStamp>)))
  "Returns full string definition for message of type '<StringStamp>"
  (cl:format cl:nil "time stamp~%string data~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'StringStamp)))
  "Returns full string definition for message of type 'StringStamp"
  (cl:format cl:nil "time stamp~%string data~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <StringStamp>))
  (cl:+ 0
     8
     4 (cl:length (cl:slot-value msg 'data))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <StringStamp>))
  "Converts a ROS message object to a list"
  (cl:list 'StringStamp
    (cl:cons ':stamp (stamp msg))
    (cl:cons ':data (data msg))
))
