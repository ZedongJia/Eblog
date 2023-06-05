package com.zdj.eblog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdj.eblog.entity.LinkPart;
import com.zdj.eblog.mapper.linkPart.InsertLinkPart;
import com.zdj.eblog.mapper.linkPart.UpdateLinkPart;
import com.zdj.eblog.mapper.linkPart.delete.LinkPartById;
import com.zdj.eblog.mapper.linkPart.select.LinkPartAll;

@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:8082"})
@RestController
public class LinkPartController {
  @Autowired
  private LinkPartAll selectAll;

  @Autowired
  private InsertLinkPart insertLinkPart;

  @Autowired
  private UpdateLinkPart updateLinkPart;

  @Autowired
  private LinkPartById deleteLinkPart;

  @GetMapping("/linkPart")
  public List<LinkPart> queryLinkPartAll(){
    return selectAll.select();
  }

  @PostMapping("/linkPart")
  public int insertLinkPart(String label, String part, String content) {
    insertLinkPart.Insert(label, part, content);
    return 200;
  }

  @PutMapping("/linkPart")
  public int updateLinkPart(int id, String label, String part, String content) {
    updateLinkPart.update(id, label, part, content);
    return 200;
  }

  @DeleteMapping("/linkPart")
  public int deleteLinkPart(int id) {
    deleteLinkPart.delete(id);
    return 200;
  }
}
