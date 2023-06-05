package com.zdj.eblog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdj.eblog.entity.Blog;
import com.zdj.eblog.mapper.blog.InsertBlog;
import com.zdj.eblog.mapper.blog.SelectAllBlog;
import com.zdj.eblog.mapper.blog.SelectBlog;
import com.zdj.eblog.mapper.blog.UpdateBlog;
import com.zdj.eblog.mapper.blog.delete.BlogById;

import org.springframework.web.bind.annotation.PostMapping;



@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:8082"})
@RestController
public class BlogController {
  
  @Autowired
  private SelectBlog selectMapper;

  @Autowired
  private SelectAllBlog selectAllMapper;

  @Autowired
  private UpdateBlog updateMapper;

  @Autowired
  private InsertBlog insertMapper;

  @Autowired
  private BlogById deleteById;

  @GetMapping("/blog")
  public List<Blog> queryBlog(String topicId){
    if (!topicId.equals("-1"))
      return selectMapper.find(topicId);
    else 
      return selectMapper.find("1");
  }

  @GetMapping("/blogAll")
  public List<Blog> queryBlogAll(){
    return selectAllMapper.find();
  }

  @PutMapping("/blog")
  public int updateBlog(int id, String topic, String title, String article) {
    updateMapper.update(id, topic, title, article);
    return 200;
  }

  @PostMapping("/blog")
  public int insertBlog(String topic, String title, String article) {
    insertMapper.insert(topic, title, article);
    return 200;
  }
  
  @DeleteMapping("/blog")
  public int deleteBlog(int id) {
    deleteById.delete(id);
    return 200;
  }
}
