// 백엔드 URL
export const API_BASE_URL = 'https://api.induk.shop';
// 토큰 관련 상수
export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const OAUTH2_REDIRECT_URI = 'https://induk.shop/oauth2/redirect';

export const GOOGLE_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const NAVER_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/naver?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const KAKAO_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/kakao?redirect_uri=' + OAUTH2_REDIRECT_URI;
