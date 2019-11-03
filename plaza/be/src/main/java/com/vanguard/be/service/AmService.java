package com.vanguard.be.service;

import org.json.JSONObject;

public interface AmService {
    JSONObject getSessionInfo(String amSessionId);
}
