package com.zdj.eblog.mapper.blog.delete;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BlogByTopic {
  @Delete("delete from blog where topic=#{topic}")
  public void delete(String topic);
}
