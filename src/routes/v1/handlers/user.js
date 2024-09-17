const get = async (req, res, next) => {
  try {
    return res.status(200).json({
      code: 200,
      message: "GET request successful",
    });
  } catch (e) {
    next(e);
  }
};

const post = async (req, res, next) => {
    try {
      return res.status(200).json({
        code: 200,
        message: "POST request successful",
      });
    } catch (e) {
      next(e);
    }
  };


  
export default {
    post,
    get,
  };