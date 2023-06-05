package com.zdj.eblog.mapper.topicBlock.select;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TopicById {
  
  @Select("select topic from topicblock where id=#{id}")
  public String find(int id);
}
