package com.seobusanguyz.reward_demo.service;

import com.seobusanguyz.reward_demo.dto.VisitDto;
import com.seobusanguyz.reward_demo.entity.Visit;
import com.seobusanguyz.reward_demo.repository.VisitRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VisitService {
    private final VisitRepository repo;

    public VisitService(VisitRepository repo) {
        this.repo = repo;
    }

    public VisitDto save(double lat, double lng) {
        Visit v = new Visit(lat, lng);
        Visit saved = repo.save(v);
        return toDto(saved);
    }

    public List<VisitDto> findAll() {
        return repo.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private VisitDto toDto(Visit v) {
        return new VisitDto(
                v.getId(),
                v.getLatitude(),
                v.getLongitude(),
                v.getTimestamp()
        );
    }
}
