module.exports = (res,rej)=>{
	return (err,result)=>{
		if (err)
			rej(err)
		res(result)
	}
}