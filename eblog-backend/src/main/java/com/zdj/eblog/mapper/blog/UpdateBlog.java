package com.zdj.eblog.mapper.blog;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UpdateBlog {
  @Update("update blog set topic=#{topic}, title=#{title}, article=#{article}, date=Now() where id=#{id}")
  public void update(int id, String topic, String title, String article);
}
