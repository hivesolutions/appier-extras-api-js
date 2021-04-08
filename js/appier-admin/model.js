export const ModelAPI = superclass =>
    class extends superclass {
        async listModels(model, params = {}) {
            const url = `${this.baseUrl}api/admin/models/${model}`;
            const response = await this.get(url, { params: params });
            return response;
        }
        async createModel(model, payload) {
            const url = `${this.baseUrl}admin/models/${model}`;
            const response = await this.post(url, { dataJ: payload });
            return response;
        }

        async getModel(model, name) {
            const url = `${this.baseUrl}admin/models/${model}/${name}`;
            const response = await this.get(url);
            return response;
        }

        async updateModel(model, name, payload) {
            const url = `${this.baseUrl}admin/models/${model}/${name}`;
            const response = await this.put(url, { dataJ: payload });
            return response;
        }

        async deleteModel(model, name) {
            const url = `${this.baseUrl}admin/models/${model}/${name}`;
            const response = await this.delete(url);
            return response;
        }
    };

export default ModelAPI;
