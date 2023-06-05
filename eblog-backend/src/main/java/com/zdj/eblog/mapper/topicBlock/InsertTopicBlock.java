package com.zdj.eblog.mapper.topicBlock;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InsertTopicBlock {
  @Insert("insert into topicblock values(null, #{topic}, #{label}, #{intro})")
  public void insert(String topic, String label, String intro);
}
