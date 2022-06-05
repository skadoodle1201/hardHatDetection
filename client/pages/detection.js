// Language selection option should not be visible

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { convertToBlob } from "~/common/helpers";
import Header from "~/components/common/Header";
// import { uploadKycDocuments } from "~/services/kycLeadService";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WebcamCapture from "~/components/WebcamCapture";

const UploadDocuments = (props) => {
	const [captureDoc, setCaptureDoc] = useState();
	const [showWebcam, setShowWebcam] = useState(false);

	const [profileImage, setProfileImage] = useState(null);

	const docTypes = Object.freeze({
		selfie: "profile-picture",
	});

	const router = useRouter();

	const webcamToggler = (doc) => {
		setCaptureDoc(doc);
		setShowWebcam((prevState) => !prevState);
	};

	const getUploadedDocs = () => {
		if (uploadedDocuments.length !== 0) {
			uploadedDocuments.forEach((document) => {
				if (document.photoId === "SIGN" && document.data) {
					setSignatureImage(`data:image/jpeg;base64,${document.data}`);
					setSignatureUploaded(true);
				}
			});
		}
	};

	// const uploadCapturedDoc = async (image, docName) => {
	// 	const imageData = image ? image.split(",")[1] : "";
	// 	const convertedImg = convertToBlob(imageData);
	// 	let dataPayload = new FormData();

	// 	if (docName === docTypes.selfie) {
	// 		setProfileImage(image);
	// 		dataPayload.append("photoId", "SELFIE");
	// 		dataPayload.append("file", convertedImg);
	// 	}
	// 	try {
	// 		const updateKycLeadResponse = await uploadKycDocuments(dataPayload);

	// 		if (
	// 			updateKycLeadResponse?.nextPageUrl &&
	// 			updateKycLeadResponse.hardRedirect
	// 		) {
	// 			window.location.href = updateKycLeadResponse?.nextPageUrl || "#";
	// 		} else if (docName === docTypes.selfie) {
	// 			setSelfieUploaded(true);
	// 			router.push(updateKycLeadResponse?.nextPageUrl);
	// 		}
	// 	} catch (errorData) {
	// 		console.log("Unable to upload documents", errorData);
	// 	}
	// };

	return (
		<div className="tpl-overview typ-mitc typ-grey">
			<Head>
				<title>Upload Image</title>
			</Head>
			<Header />
			<main>
				<div className="cm-container-md">
					{true && (
						<div className="mod-info-text typ-success mb-4">
							<span className="icon icon-done">
								<span className="path1"></span>

								<span className="path2"></span>
							</span>

							<Typography variant="h3">Wearing A Hard Hat</Typography>
						</div>
					)}
					{true && (
						<div className="mod-info-text typ-success mb-4">
							<span className="icon icon-clear"></span>

							<Typography variant="h3">Please Wear A Hard Hat !!!</Typography>
						</div>
					)}

					<div className="lyt-doc">
						<div className="d-header">
							<Typography variant="h4" component="h2">
								Hard Hat Detection Zone
							</Typography>

							<Typography variant="subtitle2">Safety is Important</Typography>
						</div>

						<div className="d-body">
							<div className="lyt-doc-list">
								<ul className="list-wrap">
									<li className="list-item">
										<div
											className={`bs-upload-card ${
												profileImage && "typ-uploaded"
											}`}
										>
											<div className="uc-body">
												<div className="img-wrap img-flex">
													{profileImage ? (
														<Image
															width="85px"
															height="85px"
															layout="responsive"
															src={"/"}
														/>
													) : (
														<Image
															width="85px"
															height="85px"
															layout="responsive"
															src={"/"}
														/>
													)}
												</div>

												<div className="info-wrap">
													<h3 className="uc-title">
														Take A Photo For Detection
													</h3>

													{/* <p
												className={`uc-desc ${
                          profileImage && "cm-text-primary"
												}`}
                        >
												{selfieUploaded && profileImage
													? uploadedText
													: profileImage
													? uploadingText
													: selfieDescription}
                        </p> */}
												</div>
											</div>

											<div className="uc-footer">
												<Button
													className="btn btn-default btn-solid"
													variant="contained"
													onClick={() => webcamToggler(docTypes.selfie)}
												>
													Take Photo
												</Button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{showWebcam && (
					<WebcamCapture
						captureDoc={captureDoc}
						webcamToggler={webcamToggler}
						// uploadCapturedDoc={uploadCapturedDoc}
					/>
				)}
			</main>
		</div>
	);
};
export default UploadDocuments;
