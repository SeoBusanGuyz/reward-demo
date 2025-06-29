package com.seobusanguyz.reward_demo.repository;

import com.seobusanguyz.reward_demo.entity.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitRepository extends JpaRepository<Visit, Long> {
}
