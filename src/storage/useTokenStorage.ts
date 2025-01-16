import { useCallback, useState, useEffect } from 'react';
import { storage } from '@/storage/storage';
import _ from 'lodash';

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
