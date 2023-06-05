package com.zdj.eblog.mapper.blog;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InsertBlog {
  @Insert("insert into blog values(null, #{topic}, #{title}, #{article}, Now())")
  public void insert(String topic, String title, String article);
}
