// Generated by gencpp from file web_lecture/StringStamp.msg
// DO NOT EDIT!


#ifndef WEB_LECTURE_MESSAGE_STRINGSTAMP_H
#define WEB_LECTURE_MESSAGE_STRINGSTAMP_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace web_lecture
{
template <class ContainerAllocator>
struct StringStamp_
{
  typedef StringStamp_<ContainerAllocator> Type;

  StringStamp_()
    : stamp()
    , data()  {
    }
  StringStamp_(const ContainerAllocator& _alloc)
    : stamp()
    , data(_alloc)  {
  (void)_alloc;
    }



   typedef ros::Time _stamp_type;
  _stamp_type stamp;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _data_type;
  _data_type data;





  typedef boost::shared_ptr< ::web_lecture::StringStamp_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::web_lecture::StringStamp_<ContainerAllocator> const> ConstPtr;

}; // struct StringStamp_

typedef ::web_lecture::StringStamp_<std::allocator<void> > StringStamp;

typedef boost::shared_ptr< ::web_lecture::StringStamp > StringStampPtr;
typedef boost::shared_ptr< ::web_lecture::StringStamp const> StringStampConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::web_lecture::StringStamp_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::web_lecture::StringStamp_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::web_lecture::StringStamp_<ContainerAllocator1> & lhs, const ::web_lecture::StringStamp_<ContainerAllocator2> & rhs)
{
  return lhs.stamp == rhs.stamp &&
    lhs.data == rhs.data;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::web_lecture::StringStamp_<ContainerAllocator1> & lhs, const ::web_lecture::StringStamp_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace web_lecture

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::web_lecture::StringStamp_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::web_lecture::StringStamp_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::web_lecture::StringStamp_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::web_lecture::StringStamp_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::web_lecture::StringStamp_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::web_lecture::StringStamp_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::web_lecture::StringStamp_<ContainerAllocator> >
{
  static const char* value()
  {
    return "37670eed6af64f24a40b9b9fc1cb861e";
  }

  static const char* value(const ::web_lecture::StringStamp_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x37670eed6af64f24ULL;
  static const uint64_t static_value2 = 0xa40b9b9fc1cb861eULL;
};

template<class ContainerAllocator>
struct DataType< ::web_lecture::StringStamp_<ContainerAllocator> >
{
  static const char* value()
  {
    return "web_lecture/StringStamp";
  }

  static const char* value(const ::web_lecture::StringStamp_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::web_lecture::StringStamp_<ContainerAllocator> >
{
  static const char* value()
  {
    return "time stamp\n"
"string data\n"
;
  }

  static const char* value(const ::web_lecture::StringStamp_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::web_lecture::StringStamp_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.stamp);
      stream.next(m.data);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct StringStamp_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::web_lecture::StringStamp_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::web_lecture::StringStamp_<ContainerAllocator>& v)
  {
    s << indent << "stamp: ";
    Printer<ros::Time>::stream(s, indent + "  ", v.stamp);
    s << indent << "data: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.data);
  }
};

} // namespace message_operations
} // namespace ros

#endif // WEB_LECTURE_MESSAGE_STRINGSTAMP_H