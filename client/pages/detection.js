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
import axios from "axios";

const UploadDocuments = (props) => {
	const [captureDoc, setCaptureDoc] = useState();
	const [showWebcam, setShowWebcam] = useState(false);

	const [profileImage, setProfileImage] = useState(null);
	const [helmet, setHelmet] = useState(false);

	const docTypes = Object.freeze({
		selfie: "profile-picture",
	});

	const router = useRouter();

	const webcamToggler = (doc) => {
		setCaptureDoc(doc);
		setShowWebcam((prevState) => !prevState);
	};

	const uploadCapturedDoc = async (image, docName) => {
		// const imageData = image ? image.split(",")[1] : "";
		// const convertedImg = convertToBlob(imageData);
		// let dataPayload = new FormData();

		// if (docName === docTypes.selfie) {
		// 	setProfileImage(image);
		// 	dataPayload.append("photoId", "SELFIE");
		// 	dataPayload.append("file", convertedImg);
		// }
		try {
			// const updateKycLeadResponse = await uploadKycDocuments(dataPayload);
			const options = {
				method: "POST",
				url: "https://helmet-detection.p.rapidapi.com/helmet-detection",
				headers: {
					"content-type": "application/json",
					"X-RapidAPI-Host": "helmet-detection.p.rapidapi.com",
					"X-RapidAPI-Key":
						"9681f24e31mshddfe11a8a8edbc3p1ed59fjsned76106450ec",
				},
				data: '{"url":"https://www.looper.com/img/gallery/famous-movie-stars-biggest-box-office-bombs/intro-1631578938.webp"}',
			};

			axios
				.request(options)
				.then(function (response) {
					console.log(response);
					if (response.data.length > 0) {
						if (response.data[0]?.label === "Helmet") {
							setHelmet(true);
							setProfileImage(true);
						} else {
							setHelmet(false);
							setProfileImage(true);
						}
					} else {
						setHelmet(false);
						setProfileImage(true);
					}
				})
				.catch(function (error) {
					console.error(error);
				});

			// if (
			// 	updateKycLeadResponse?.nextPageUrl &&
			// 	updateKycLeadResponse.hardRedirect
			// ) {
			// 	window.location.href = updateKycLeadResponse?.nextPageUrl || "#";
			// } else if (docName === docTypes.selfie) {
			// 	setSelfieUploaded(true);
			// 	router.push(updateKycLeadResponse?.nextPageUrl);
			// }
		} catch (errorData) {
			console.log("Unable to upload documents", errorData);
		}
	};

	return (
		<div className="tpl-overview typ-mitc typ-grey">
			<Head>
				<title>Upload Image</title>
			</Head>
			<Header />
			<main>
				<div className="cm-container-md">
					{profileImage && helmet && (
						<div className="mod-info-text typ-success mb-4">
							<span className="icon icon-done">
								<span className="path1"></span>

								<span className="path2"></span>
							</span>

							<Typography variant="h3">Wearing A Hard Hat</Typography>
						</div>
					)}
					{profileImage && !helmet && (
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
										<div className="bs-upload-card ">
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
															src={"/images/image-placeholder.jpg"}
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
						uploadCapturedDoc={uploadCapturedDoc}
					/>
				)}
			</main>
		</div>
	);
};
export default UploadDocuments;
