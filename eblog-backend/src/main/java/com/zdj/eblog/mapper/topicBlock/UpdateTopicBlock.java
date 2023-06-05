package com.zdj.eblog.mapper.topicBlock;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UpdateTopicBlock {
  @Update("update topicblock set topic=#{topic}, label=#{label}, intro=#{intro} where id=#{id}")
  public void update(int id, String topic, String label, String intro);
}
