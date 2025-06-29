package com.seobusanguyz.reward_demo.controller;

import com.seobusanguyz.reward_demo.dto.VisitDto;
import com.seobusanguyz.reward_demo.service.VisitService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.net.URI;

@RestController
@RequestMapping("/api/visits")
public class VisitController {
    private final VisitService service;

    public VisitController(VisitService service) {
        this.service = service;
    }

    // 1) 방문 정보 저장 (POST /api/visits)
    @PostMapping
    public ResponseEntity<VisitDto> create(@RequestBody VisitDto req) {
        VisitDto saved = service.save(req.latitude(), req.longitude());
        URI location = URI.create("/api/visits/" + saved.id());
        return ResponseEntity
                .created(location)
                .body(saved);
    }

    // 2) 모든 방문 기록 조회 (GET /api/visits)
    @GetMapping
    public List<VisitDto> list() {
        return service.findAll();
    }
}
