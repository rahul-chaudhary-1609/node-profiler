export const ApiResponse = {
    success: function(req,res,data,message,res_code){
        let response = {
            status:res_code,
            message:message,
            data:data
        }

        return res.json(response);
    },

    error: function(req,res,data,message,res_code){
        let response = {
            status:res_code,
            message:message,
            data:data
        }

        return res.json(response);
    }
}
