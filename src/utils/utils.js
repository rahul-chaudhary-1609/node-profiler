export const ApiResponse = {
    success: function(req,res,data,message,res_code){
        let response = {
            status:res_code,
            message:message,
            data:data
        }

        return res.sendStatus(res_code).json(response);
    },

    error: function(req,res,data,message,res_code){
        let response = {
            status:res_code,
            message:message,
            data:data
        }

        return res.sendStatus(res_code).json(response);
    }
}
