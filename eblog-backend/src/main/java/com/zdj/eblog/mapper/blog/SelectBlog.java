package com.zdj.eblog.mapper.blog;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zdj.eblog.entity.Blog;

@Mapper
public interface SelectBlog {
  @Select("select blog.id, blog.topic, blog.title, blog.article, blog.date from blog join topicblock using(topic) where topicblock.id=#{topicId}")
  public List<Blog> find(String topicId);
}
