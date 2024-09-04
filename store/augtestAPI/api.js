import axios from "axios"
const augtestAPI = axios.create({
  baseURL: "https://aug1test-49277.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return augtestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return augtestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_mcfdg_list(payload) {
  return augtestAPI.get(`/api/v1/mcfdg/`)
}
function api_v1_mcfdg_create(payload) {
  return augtestAPI.post(`/api/v1/mcfdg/`, payload)
}
function api_v1_mcfdg_retrieve(payload) {
  return augtestAPI.get(`/api/v1/mcfdg/${payload.id}/`)
}
function api_v1_mcfdg_update(payload) {
  return augtestAPI.put(`/api/v1/mcfdg/${payload.id}/`, payload)
}
function api_v1_mcfdg_partial_update(payload) {
  return augtestAPI.patch(`/api/v1/mcfdg/${payload.id}/`, payload)
}
function api_v1_mcfdg_destroy(payload) {
  return augtestAPI.delete(`/api/v1/mcfdg/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return augtestAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return augtestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return augtestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return augtestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return augtestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return augtestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return augtestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return augtestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return augtestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return augtestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return augtestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return augtestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_mcfdg_list,
  api_v1_mcfdg_create,
  api_v1_mcfdg_retrieve,
  api_v1_mcfdg_update,
  api_v1_mcfdg_partial_update,
  api_v1_mcfdg_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
