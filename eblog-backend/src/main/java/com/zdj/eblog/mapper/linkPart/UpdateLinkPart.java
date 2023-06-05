package com.zdj.eblog.mapper.linkPart;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UpdateLinkPart {
  @Update("update linkpart set label=#{label}, part=#{part}, date=Now(), content=#{content} where id=#{id}")
  public void update(int id, String label, String part, String content);
}
