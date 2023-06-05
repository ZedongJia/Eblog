package com.zdj.eblog.mapper.blog;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zdj.eblog.entity.Blog;

@Mapper
public interface SelectAllBlog {
  @Select("select * from blog ")
  public List<Blog> find();
}
