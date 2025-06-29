package com.seobusanguyz.reward_demo.dto;

import java.time.LocalDateTime;

public record VisitDto(
        Long    id,
        double  latitude,
        double  longitude,
        LocalDateTime timestamp
) {}
