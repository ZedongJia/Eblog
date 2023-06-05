package com.zdj.eblog.mapper.topicBlock;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeleteTopicBlock {
  
  @Delete("delete from topicblock where id=#{id}")
  public void delete(int id);
}
