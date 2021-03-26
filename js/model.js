export const ModelAPI = superclass =>
    class extends superclass {
        async listModel(model, options = {}) {
            const url = `${this.baseUrl}api/orders`;
            const response = await this.get(url, options);
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

        async deleteModel(name) {
            const url = `${this.baseUrl}admin/models/${model}/${name}`;
            const response = await this.delete(url);
            return response;
        }
    };

export default ModelAPI;