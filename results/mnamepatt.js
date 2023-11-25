const mnamepatt = [
  "cvcvc",
  "cvcc",
  "cvcvcc",
  "cvccvvc",
  "cvccvvc",
  "cvcvc",
  "cvccvcc",
  "ccvcv",
  "cvccvc",
  "cvcc",
  "cvccv",
  "cccvccvccvc",
  "cvcvvc",
  "cvvc",
  "cvcc",
  "cvcvcc",
  "cvvccv",
  "cvccvcc",
  "ccvcvc",
  "ccvvc",
  "cvccv",
  "cvc",
  "cvcvcc",
  "vcccvcv",
  "cvcvc",
  "cvcvc",
  "cvcccvc",
  "cvcv",
  "cvcvccv",
  "cvcv",
  "cvccv",
  "cvcccvv",
  "ccvcc",
  "ccvcc",
  "vcvc",
  "ccvccvc",
  "vcccvc",
  "cvvcvcc",
  "ccvcvcv",
  "cvccv",
  "cvccvc",
  "cvccvc",
  "cvcvcc",
  "cvvccvc",
  "cvccv",
  "cvcc",
  "cvcvc",
  "cvv",
  "vccvcc",
  "cvccvc",
  "cvccv",
  "cvcvcc",
  "cvvcc",
  "cvccvcvc",
  "cvcvcc",
  "ccvccvc",
  "ccvcccvc",
  "cvccv",
  "cvccv",
  "vvcvcv",
  "cvccvccv",
  "cvccvcvc",
  "ccvccvc",
  "cvccv",
  "cvvcv",
  "cvvvc",
  "cvc",
  "cvcvcv",
  "vvccvc",
  "cvccvc",
  "cvccvcv",
  "cvccvc",
  "cvcvc",
  "cvcvvc",
  "vcvvc",
  "cvccvc",
  "ccvccvc",
  "cvccvcvc",
  "cvccvv",
  "cvcc",
  "vccvcv",
  "ccvccv",
  "vcvcvcccv",
  "cvvv",
  "cvccvcc",
  "ccvccvc",
  "cvccvc",
  "cvccvc",
  "cvccv",
  "cvcvcvvc",
  "cvcvv",
  "vvc",
  "cvcvv",
  "vccvc",
  "ccvc",
  "ccvc",
  "ccvcv",
  "cvccvc",
  "vccvv",
  "cvccvv",
  "cvcv",
  "ccvccvc",
  "cvcvc",
  "cvcvc",
  "ccvcc",
  "cvv",
  "cvcv",
  "cvc",
  "cvcvvc",
  "cvcvccv",
  "cvcvvc",
  "vccvcvv",
  "cvcv",
  "cvcvc",
  "cvcvv",
  "cvcv",
  "cvvc",
  "cvvc",
  "vcvcvc",
  "vcvcvc",
  "ccvvcvcv",
  "cvcvv",
  "cvcv",
  "cvcvccvvc",
  "cvcc",
  "vcvcvccvc",
  "cvcc",
  "cvvcvcc",
  "vcvc",
  "vccvc",
  "cvcvvc",
  "cvv",
  "cvccvc",
  "vvcvc",
  "cvcvcc",
  "cvcvc",
  "cvcccvc",
  "cvcc",
  "ccvcc",
  "ccvccvvc",
  "cvcv",
  "cvccvvc",
  "ccvvcvc",
  "cvvcc",
  "cvcvcvcc",
  "cvcvc",
  "vcvvc",
  "ccvcvc",
  "cvvcvc",
  "cvcvc",
  "cvcvc",
  "cvcc",
  "cvcccvcvcvc",
  "cvccvc",
  "cvccvvcv",
  "vcvcvvc",
  "ccvccvc",
  "cvcvvc",
  "cvcvc",
  "cvvcvc",
  "cvccvcc",
  "cvcvc",
  "cvccvc",
  "vcvvvc",
  "cvv",
  "cvccvv",
  "vccvc",
  "vccvvc",
  "cvcvcvc",
  "cvcvc",
  "cvvcvc",
  "cvcvc",
  "cvcvc",
  "vcv",
  "cvccvv",
  "cvc",
  "cvccvcc",
  "cvcv",
  "vvcvc",
  "cccvccvvc",
  "cvvc",
  "cvvcvccv",
  "ccvvcc",
  "vcvc",
  "cvccvc",
  "cvcvccvc",
  "vvccvc",
  "cvcccvc",
  "cvcvvc",
  "vcvcvcc",
  "cvccvc",
  "cvccvcc",
  "cvcvcvc",
  "cvccvc",
  "cvcvc",
  "cvvv",
  "cvcvc",
  "cvcvvc",
  "ccvc",
  "cvccv",
  "cvccvcv",
  "cvccvc",
  "cvccvc",
  "cvcvcvvc",
  "cvccvc",
  "cvcvc",
  "vcvc",
  "ccvv",
  "cvcvvc",
  "cvcc",
  "ccvvc",
  "ccvcv",
  "vcccvc",
  "ccvccvcc",
  "cvccvc",
  "cvcvcvc",
  "cvcv",
  "ccvvcv",
  "cvvcvc",
  "cvcvvc",
  "vvcvcc",
  "cvccvc",
  "vvccvc",
  "ccvcv",
  "ccvc",
  "cvcvvc",
  "cvcvc",
  "vcvc",
  "cvccvc",
  "vccvcc",
  "cvcvc",
  "cvcv",
  "cvccvc",
  "cvccvc",
  "cvcv",
  "vccv",
  "ccvccvv",
  "cvcvc",
  "cvccvv",
  "cvvcvccv",
  "cvccvcc",
  "cvvcv",
  "cvvc",
  "vcccvc",
  "cvccvcvc",
  "cvccccvc",
  "cvccvc",
  "cvcvcc",
  "cvcv",
  "cvc",
  "ccvcvccvc",
  "cvcvccv",
  "vcvc",
  "cvcvc",
  "ccvcv",
  "ccvcvc",
  "cvccvcvvc",
  "vcccvc",
  "cvvc",
  "cvcv",
  "cvccvc",
  "ccvcvc",
  "cvvc",
  "cvcv",
  "vcccvc",
  "cvccvc",
  "cvccvc",
  "ccvvcvc",
  "ccvcc",
  "cvccv",
  "cvcvcv",
  "cvccv",
  "cvcvccv",
  "cvccvcc",
  "cvcvvc",
  "vcvcvvcv",
  "ccvcvc",
  "cvc",
  "cvvc",
  "vcvc",
  "cvvcvc",
  "cvcvccv",
  "cvvcvcc",
  "cccvc",
  "cvvc",
  "cvccvc",
  "cvccc",
  "cvvc",
  "cvcvc",
  "cvvcvc",
  "vccvvcc",
  "vccv",
  "vccvcvvc",
  "vvcvc",
  "cvcvc",
  "ccvc",
  "cvcccvcc",
  "cvcv",
  "cvc",
  "vccvc",
  "cvccvcc",
  "cvcvc",
  "cvcc",
  "ccvccvv",
  "cvcvc",
  "ccvcvc",
  "vvcvccvc",
  "cvccv",
  "cvcc",
  "ccvcc",
  "ccvcv",
  "cvcv",
  "cvvcv",
  "cvccvc",
  "cvvcvc",
  "cvccvc",
  "vcvc",
  "vcvc",
  "cvcvc",
  "cvcv",
  "ccvc",
  "cvccvc",
  "cvc",
  "cvvc",
  "cvccvc",
  "cvccv",
  "cvccvc",
  "cvccv",
  "cvccvcc",
  "cvcccvvc",
  "cvccvc",
  "vcvcvv",
  "cvccvc",
  "vccvc",
  "cvcccvc",
  "ccvccvc",
  "cvcvcv",
  "cvvcc",
  "cvcvcv",
  "vccvcvc",
  "vcccvc",
  "cvcvc",
  "ccvcv",
  "cvccvcc",
  "cvvvc",
  "cvcc",
  "cvvc",
  "cvcvc",
  "cvccvc",
  "cvcvc",
  "cvccv",
  "ccvccvc",
  "cvccvc",
  "cvcvc",
  "vccvcc",
  "cvccvcc",
  "ccvcc",
  "cvccv",
  "cvcvccvc",
  "cvcc",
  "cvccvccvc",
  "ccvc",
  "cvvcv",
  "ccvccc",
  "ccvccvc",
  "cvcvv",
  "ccvcv",
  "ccvccvc",
  "cvcvcvv",
  "cvcvvc",
  "vccvvc",
  "cvcv",
  "cvcvc",
  "vcccv",
  "vccvcc",
  "cvc",
  "ccvv",
  "cvcv",
  "cvccvc",
  "ccvcvc",
  "cvcvvc",
  "vcvc",
  "cvcvc",
  "cvcvcccvc",
  "cvccvc",
  "cvccvcc",
  "cvccvcc",
  "ccvvcv",
  "ccvvc",
  "vccvc",
  "vvcc",
  "cvccvc",
  "cvccvc",
  "cvcvvc",
  "cvcccvcc",
  "cvvcvcv",
  "cvccv",
  "cvccvv",
  "vccvccv",
  "vcvccv",
  "cvcvccvc",
  "cvcvcvc",
  "vccvcc",
  "cvccvc",
  "cvvc",
  "cvvccvc",
  "cvcv",
  "cvvcvc",
  "cvccvc",
  "cvcvv",
  "cvccvcc",
  "cvvc",
  "cvcvcvc",
  "vccvcvv",
  "ccvcvcvc"
]; 
 
 module.exports = mnamepatt;