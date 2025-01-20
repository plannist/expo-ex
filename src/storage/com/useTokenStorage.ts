/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/client.ts
 * @description storage 사용하여 서버 통신 token 관리
 * @author RN framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { useCallback, useState, useEffect } from 'react';
import { storage } from '@/storage/storage';

type TokenType = {
  accessToken: string;
  refreshToken: string;
};

export const useTokenStorage = () => {
  const [token, setToken] = useState<TokenType | null>({
    accessToken: storage.getString('accessToken') || null,
    refreshToken: storage.getString('refreshToken') || null
  });

  const accessToken = useCallback((accessToken: string) => {
    storage.set('accessToken', accessToken);
    setToken((prev) => ({ ...prev, accessToken }));
  }, []);

  const refreshToken = useCallback((refreshToken: string) => {
    storage.set('refreshToken', refreshToken);
    setToken((prev) => ({ ...prev, refreshToken }));
  }, []);

  const clearToken = useCallback(() => {
    storage.delete('accessToken');
    storage.delete('refreshToken');
    setToken({ accessToken: null, refreshToken: null });
  }, []);

  useEffect(() => {
    const subscription = storage.addOnValueChangedListener((key: string) => {
      //TODO: 엑세스 토큰과 리프레시 토큰 변경 감지 로직 필요시 구현 가능
      console.log('storage.onValueChanged[', key, ']: ', storage.getString(key));
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { token, accessToken, refreshToken, clearToken };
};
