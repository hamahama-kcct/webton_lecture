// Generated by gencpp from file web_lecture/StringStampListResponse.msg
// DO NOT EDIT!


#ifndef WEB_LECTURE_MESSAGE_STRINGSTAMPLISTRESPONSE_H
#define WEB_LECTURE_MESSAGE_STRINGSTAMPLISTRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <web_lecture/StringStamp.h>

namespace web_lecture
{
template <class ContainerAllocator>
struct StringStampListResponse_
{
  typedef StringStampListResponse_<ContainerAllocator> Type;

  StringStampListResponse_()
    : list()  {
    }
  StringStampListResponse_(const ContainerAllocator& _alloc)
    : list(_alloc)  {
  (void)_alloc;
    }



   typedef std::vector< ::web_lecture::StringStamp_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::web_lecture::StringStamp_<ContainerAllocator> >::other >  _list_type;
  _list_type list;





  typedef boost::shared_ptr< ::web_lecture::StringStampListResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::web_lecture::StringStampListResponse_<ContainerAllocator> const> ConstPtr;

}; // struct StringStampListResponse_

typedef ::web_lecture::StringStampListResponse_<std::allocator<void> > StringStampListResponse;

typedef boost::shared_ptr< ::web_lecture::StringStampListResponse > StringStampListResponsePtr;
typedef boost::shared_ptr< ::web_lecture::StringStampListResponse const> StringStampListResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::web_lecture::StringStampListResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::web_lecture::StringStampListResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::web_lecture::StringStampListResponse_<ContainerAllocator1> & lhs, const ::web_lecture::StringStampListResponse_<ContainerAllocator2> & rhs)
{
  return lhs.list == rhs.list;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::web_lecture::StringStampListResponse_<ContainerAllocator1> & lhs, const ::web_lecture::StringStampListResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace web_lecture

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::web_lecture::StringStampListResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::web_lecture::StringStampListResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::web_lecture::StringStampListResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "2e57eb5ee95c0a584fb520d98705f88b";
  }

  static const char* value(const ::web_lecture::StringStampListResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x2e57eb5ee95c0a58ULL;
  static const uint64_t static_value2 = 0x4fb520d98705f88bULL;
};

template<class ContainerAllocator>
struct DataType< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "web_lecture/StringStampListResponse";
  }

  static const char* value(const ::web_lecture::StringStampListResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "web_lecture/StringStamp[] list\n"
"\n"
"================================================================================\n"
"MSG: web_lecture/StringStamp\n"
"time stamp\n"
"string data\n"
;
  }

  static const char* value(const ::web_lecture::StringStampListResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.list);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct StringStampListResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::web_lecture::StringStampListResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::web_lecture::StringStampListResponse_<ContainerAllocator>& v)
  {
    s << indent << "list[]" << std::endl;
    for (size_t i = 0; i < v.list.size(); ++i)
    {
      s << indent << "  list[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::web_lecture::StringStamp_<ContainerAllocator> >::stream(s, indent + "    ", v.list[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // WEB_LECTURE_MESSAGE_STRINGSTAMPLISTRESPONSE_H