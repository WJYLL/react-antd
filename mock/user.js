import Mock from 'mockjs'

export default {
  "GET /api/users": (req,res) => { res.status(200).json({ users: Mock.mock({
    'list|1-10': [{ 
      'id|+1': 1,
      'name|1-10': '22'
    }],
})})},
};
