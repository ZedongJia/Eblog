package com.zdj.eblog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdj.eblog.entity.TopicBlock;
import com.zdj.eblog.mapper.blog.delete.BlogByTopic;
import com.zdj.eblog.mapper.linkPart.delete.DLinkPartByLabel;
import com.zdj.eblog.mapper.topicBlock.DeleteTopicBlock;
import com.zdj.eblog.mapper.topicBlock.InsertTopicBlock;
import com.zdj.eblog.mapper.topicBlock.UpdateTopicBlock;
import com.zdj.eblog.mapper.topicBlock.select.LabelById;
import com.zdj.eblog.mapper.topicBlock.select.TopicBlockAll;
import com.zdj.eblog.mapper.topicBlock.select.TopicById;

@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:8082" })
@RestController
public class TopicBlockController {
  
  // blog依赖
  @Autowired
  private BlogByTopic deleteBlogByTopic;
  // linkPart依赖
  @Autowired
  private DLinkPartByLabel deleteLinkPartByLabel;
  // block依赖
  @Autowired
  private TopicBlockAll selectAll;

  @Autowired
  private TopicById selectTopicById;

  @Autowired
  private LabelById selectLabelById;

  @Autowired
  private UpdateTopicBlock updateMapper;

  @Autowired
  private InsertTopicBlock insertMapper;

  @Autowired
  private DeleteTopicBlock deleteMapper;

  @GetMapping("/block")
  public List<TopicBlock> queryBlock() {
    return selectAll.find();
  }

  @PutMapping("/block")
  public int updateBlock(int id, String topic, String label, String intro) {
    updateMapper.update(id, topic, label, intro);
    return 200;
  }

  @PostMapping("/block")
  public int insertBlock(String topic, String label, String intro) {
    insertMapper.insert(topic, label, intro);
    return 200;
  }

  @DeleteMapping("/block")
  public int deleteBlock(int id, boolean force) {
    if (force) {
      deleteBlogByTopic.delete(selectTopicById.find(id));
      deleteLinkPartByLabel.delete(selectLabelById.find(id));
    }
    deleteMapper.delete(id);
    return 200;
  }
}
