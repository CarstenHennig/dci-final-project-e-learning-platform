import bcrypt from 'bcrypt';


export async function hash(input){
	return await bcrypt.hash(input,10)
}

//write compare function

export async function  compare(input,hash){
	if(!input){
		return false;
	}
	return await bcrypt.compare(input,hash)
}