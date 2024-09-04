import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_mcfdg_list = createAsyncThunk(
  "mcfdgs/api_v1_mcfdg_list",
  async payload => {
    const response = await apiService.api_v1_mcfdg_list(payload)
    return response.data
  }
)
export const api_v1_mcfdg_create = createAsyncThunk(
  "mcfdgs/api_v1_mcfdg_create",
  async payload => {
    const response = await apiService.api_v1_mcfdg_create(payload)
    return response.data
  }
)
export const api_v1_mcfdg_retrieve = createAsyncThunk(
  "mcfdgs/api_v1_mcfdg_retrieve",
  async payload => {
    const response = await apiService.api_v1_mcfdg_retrieve(payload)
    return response.data
  }
)
export const api_v1_mcfdg_update = createAsyncThunk(
  "mcfdgs/api_v1_mcfdg_update",
  async payload => {
    const response = await apiService.api_v1_mcfdg_update(payload)
    return response.data
  }
)
export const api_v1_mcfdg_partial_update = createAsyncThunk(
  "mcfdgs/api_v1_mcfdg_partial_update",
  async payload => {
    const response = await apiService.api_v1_mcfdg_partial_update(payload)
    return response.data
  }
)
export const api_v1_mcfdg_destroy = createAsyncThunk(
  "mcfdgs/api_v1_mcfdg_destroy",
  async payload => {
    const response = await apiService.api_v1_mcfdg_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mcfdgsSlice = createSlice({
  name: "mcfdgs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_mcfdg_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mcfdg_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mcfdg_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mcfdg_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mcfdg_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mcfdg_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mcfdg_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mcfdg_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_mcfdg_list,
  api_v1_mcfdg_create,
  api_v1_mcfdg_retrieve,
  api_v1_mcfdg_update,
  api_v1_mcfdg_partial_update,
  api_v1_mcfdg_destroy,
  slice: mcfdgsSlice
}
