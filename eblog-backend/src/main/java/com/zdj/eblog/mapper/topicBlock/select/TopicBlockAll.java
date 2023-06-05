package com.zdj.eblog.mapper.topicBlock.select;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zdj.eblog.entity.TopicBlock;

@Mapper
public interface TopicBlockAll {
  @Select("select * from topicblock")
  public List<TopicBlock> find();
}
