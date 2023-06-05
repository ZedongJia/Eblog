package com.zdj.eblog.mapper.blog.delete;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BlogById {
  @Delete("delete from blog where id=#{id}")
  public void delete(int id);
}
