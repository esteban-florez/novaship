--
-- PostgreSQL database dump
--

-- Dumped from database version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: AuthUser; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."AuthUser" (id, type, "createdAt", "updatedAt", failed) FROM stdin;
SLzbbJt1OP2Ai1D	PERSON	2024-06-28 17:48:31.221	2024-06-28 17:48:31.221	0
e4tCHsE09P8xnb6	PERSON	2024-06-28 17:48:31.537	2024-06-28 17:48:31.537	0
dRiGkilDFqcwQMB	PERSON	2024-06-28 17:48:31.904	2024-06-28 17:48:31.904	0
s3e9xnImyTwkoFE	PERSON	2024-06-28 17:48:32.319	2024-06-28 17:48:32.319	0
0pPDpCWYq9gFkgt	PERSON	2024-06-28 17:48:32.764	2024-06-28 17:48:32.764	0
fn2jI3gChbtZETi	PERSON	2024-06-28 17:48:33.135	2024-06-28 17:48:33.135	0
Pzz9STyL0W3zvNB	PERSON	2024-06-28 17:48:33.552	2024-06-28 17:48:33.552	0
TT1kqHqKX7CFfZV	PERSON	2024-06-28 17:48:34.001	2024-06-28 17:48:34.001	0
igX0iTOcNbFpwDF	PERSON	2024-06-28 17:48:34.487	2024-06-28 17:48:34.487	0
4kqWD1xHRs2Ep3f	PERSON	2024-06-28 17:48:35.041	2024-06-28 17:48:35.041	0
tq7UXF7l9G035sk	COMPANY	2024-06-28 17:48:35.8	2024-06-28 17:48:35.8	0
zyG4a3M5t9Hh7Qm	COMPANY	2024-06-28 17:48:36.386	2024-06-28 17:48:36.386	0
evXlsF83joljf1M	COMPANY	2024-06-28 17:48:36.944	2024-06-28 17:48:36.944	0
El3kkpnGgEmyZqo	COMPANY	2024-06-28 17:48:37.566	2024-06-28 17:48:37.566	0
Ax4WqQYCY1V6Eil	COMPANY	2024-06-28 17:48:38.102	2024-06-28 17:48:38.102	0
QvKIHWaHUpSMFgV	COMPANY	2024-06-28 17:48:38.639	2024-06-28 17:48:38.639	0
ZBhq1i2ERVjysln	COMPANY	2024-06-28 17:48:39.183	2024-06-28 17:48:39.183	0
snOI59Dqx2u1Sfk	COMPANY	2024-06-28 17:48:39.721	2024-06-28 17:48:39.721	0
dN7O6God4weCXq3	COMPANY	2024-06-28 17:48:40.262	2024-06-28 17:48:40.262	0
VszINS3VoBis3vs	COMPANY	2024-06-28 17:48:40.863	2024-06-28 17:48:40.863	0
kon3fZBSBMYkxYl	INSTITUTE	2024-06-28 17:48:41.508	2024-06-28 17:48:41.508	0
hIYcr0pvVqdgOZ7	INSTITUTE	2024-06-28 17:48:42.102	2024-06-28 17:48:42.102	0
jLQfBtmap854Vvi	INSTITUTE	2024-06-28 17:48:42.768	2024-06-28 17:48:42.768	0
jmekDv24AmtGGNk	INSTITUTE	2024-06-28 17:48:43.351	2024-06-28 17:48:43.351	0
OlNMbtnD9OSBasx	INSTITUTE	2024-06-28 17:48:43.898	2024-06-28 17:48:43.898	0
6tLaSXTMJS9Ve7a	INSTITUTE	2024-06-28 17:48:44.54	2024-06-28 17:48:44.54	0
d8xWCMrC2XJLj8e	INSTITUTE	2024-06-28 17:48:45.181	2024-06-28 17:48:45.181	0
Qp1JhBRHBIAyGbN	INSTITUTE	2024-06-28 17:48:45.77	2024-06-28 17:48:45.77	0
wDPFEPbjay8aaYK	INSTITUTE	2024-06-28 17:48:46.34	2024-06-28 17:48:46.34	0
fimb4bnlxaNV8p7	INSTITUTE	2024-06-28 17:48:46.797	2024-06-28 17:48:46.797	0
4Q0hIfKdE6Ei7OI	ADMIN	2024-06-28 17:49:03.321	2024-06-28 17:49:03.321	0
LDdTjyMgKLM2tgo	ADMIN	2024-06-28 17:49:03.336	2024-06-28 17:49:03.336	0
nieAkFoasIErb3i	ADMIN	2024-06-28 17:49:03.392	2024-06-28 17:49:03.392	0
\.


--
-- Data for Name: Admin; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Admin" (id, name, email, image, "authUserId") FROM stdin;
clxyzmddh01havxytws7v02ix	Jesús de Freitas	jesus@admin.com	\N	LDdTjyMgKLM2tgo
clxyzmddi01hcvxytalc8ayi6	Myriam Yaqueno	myriam@admin.com	\N	nieAkFoasIErb3i
clxyzmddj01hevxytvd6c3xmg	Esteban Florez	esteban@admin.com	\N	4Q0hIfKdE6Ei7OI
\.


--
-- Data for Name: AuthKey; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."AuthKey" (id, hashed_password, user_id, primary_key, expires) FROM stdin;
email:u0@user.dev	s2:9cdFStAJ3g0MGsPg:d3f46f4c077a0efc2ac772b6fd4d10ab95d7c0cfd69fb3398605903d7b9fdf11371469db5e0a386831dbaca88e254afaed9683cf9a8ca9f79c065125e416e11f	SLzbbJt1OP2Ai1D	t	\N
email:u1@user.dev	s2:hvd1dgI0b9TmlNNj:f1e85199e37396062963c35fb6e4966916912cfaf3967eaa8639acec485549d40a797232839e788096c871d9ebb465eb8d9f10dcdf117aa48f6ba7daf5d32d39	e4tCHsE09P8xnb6	t	\N
email:u2@user.dev	s2:63xgnsYJG73WEui5:61b50eebf9be08e8c0c4f28d262451593cb960dc6f05bf72ce1d60f036d42fd8634eb96d7b576dc8f09c380f5a8208541a09cda8ca6a441107933ade0f610d46	dRiGkilDFqcwQMB	t	\N
email:u3@user.dev	s2:dpAKJWEISKZmOlAo:1b6f49530d7a026fc47d71b4b45a7c74e186cfcbe0b9275129af51fbce18ae25bf549a67173cbde93a8b5b8f1a47aa02a254b44857b5c026a8f2c826ccae602d	s3e9xnImyTwkoFE	t	\N
email:u4@user.dev	s2:Ua6aJqbcTUsDb1wi:0ce54ab7b48a4ab6f6b4b34168ae8d43259f0c9d349d1ded73deb3746a5f332980983cc2e3414add0ec4cbb9ed4a78d6797312fc081a938521e183cb29bd2d5f	0pPDpCWYq9gFkgt	t	\N
email:u5@user.dev	s2:fUGJQrClh10z4wdD:500128cee0eb4e1b2146e21d76a1f0d9822c1449d74be945720d87c221c3ef975d7bd99123384e9a873c0a2b57f24ee4011b209070296737b1b4d54ee1790141	fn2jI3gChbtZETi	t	\N
email:u6@user.dev	s2:TeXbRNAhw9OKVBHb:c57a5f8831a043dcbfa0ca562862d8572d6ebc71e4a7e3e155857829b0243ada2c6a9c4a3d1ba132c04b1cc42d1db08272ee5930687d2d04bf1ffb6408d2f713	Pzz9STyL0W3zvNB	t	\N
email:u7@user.dev	s2:AVyRTmWNfiBh8GDa:c07cd9423b7a88696c5f090c06ecb8059d9d7fa76e854e7919e0bde35dc7498572062859afd2aa545cd23de197f688ae417e49a1f6636ab4a55a6c0ee2784ba3	TT1kqHqKX7CFfZV	t	\N
email:u8@user.dev	s2:w2XgGqVGCPLwFjpT:cdd6ee1e894a74b2cd461093b49d5c2dfa783e702a2f8c5192a1a09f3b0c48b72e71f74fce06d183d24b0de2185792b5f9d918a7e4c001e6545561766c3d3c86	igX0iTOcNbFpwDF	t	\N
email:u9@user.dev	s2:UbpDKeXaMxOtv3V6:b6ce20980b31963cb91a40aa4c72bf0f3fd36375d1b73e88017d5716bf6a1cc9707bc30e8dc94affc036e24230f3921890272197ffcd491dc9e9081b9352b2df	4kqWD1xHRs2Ep3f	t	\N
email:c0@company.dev	s2:NxMfMt8olCwjHSu6:c600ddbca83ed65fe9208686bdc8b304b40148f5f12df08b3e4a4f4d0f15686eb0f370e69e2ddfbba377ff3e2f8e0ae5b50d8a06a60c3c3fa5ddbff7ef0d1d92	tq7UXF7l9G035sk	t	\N
email:c1@company.dev	s2:qhHETWeGIC1r0kT5:f2c05dd7ca7487047fdf984a0511fa455cb292ee55672b581283e7fab00caa2c33246b1be6d5a60f5e714119477b7e1ce7b1f0b93c4656902a24370199b47e2f	zyG4a3M5t9Hh7Qm	t	\N
email:c2@company.dev	s2:h1VLiEJFHnph3wRX:cfc600539231931ea0ca5c3b41c09836d43aa83d1773ca3f024a3f4dd5f077bc48f1746372694248c519cf3be8756428a95a8d0ffe39afe070a8b1ab24bb1c98	evXlsF83joljf1M	t	\N
email:c3@company.dev	s2:nYPfX2zASQkDynIK:0eebd265c20771623ac84f323f68a709037f530e1c0fca328729eabe6bb938fb17b8aeb4537025b062387f8434f926b98c3f14ea07f14d5e6d4c528307e6a449	El3kkpnGgEmyZqo	t	\N
email:c4@company.dev	s2:xixQ58xjDmG3TQaY:9b044bdb10e4265bbe190e4bac5c9456dc199535d1cff4db40e8eaf4ed0b453397f837543cfe2525aacd18ea123f8e19f5572cc63b945ee079cb1cae1183ed19	Ax4WqQYCY1V6Eil	t	\N
email:c5@company.dev	s2:4y6sK5rxuzOoBrHS:f40229c42294e720e98c7a31b158f24335a176433b03a6307962cade7320384e2cfaf7092ad6c620b86715d455c7dfe873fdab0fc779cb378b14937ef9d27a6a	QvKIHWaHUpSMFgV	t	\N
email:c6@company.dev	s2:HYyjqYfesdZFi3ip:890f6de817be95006627f067688b3320817aa8dee0e952408de0ad9d4890b6c5f9db379215801af722de51d5102bea2503d832528e9d1ce136f38c73fb61c7e8	ZBhq1i2ERVjysln	t	\N
email:c7@company.dev	s2:YeU6DvznrkHMecTY:279908a0ff6b5c33c6152a640c458c306da346d99e1ded3dea2d68731398c24603c57c0bce02acede1f74dbb9d51fdbae6558fe2b343e174a3586afecea99ae1	snOI59Dqx2u1Sfk	t	\N
email:c8@company.dev	s2:kEGuW6YdN5RhiQ3t:8b8a3cb3976ee12137e0cc4efee56712467c97fb86136b2567ceac099abccda0cb53e4d0e26750925588ea4d0839149e5d4a8f3c9fc7e41184c732df5a97dc68	dN7O6God4weCXq3	t	\N
email:c9@company.dev	s2:z2TIRrsAlDz4O67a:a2d83adf8e94c01199f4c4c198e4f15c3d940cc402a0b04bcd3dc5b0e4dcca8bc923a4786ebfc7f134cf2a3f4a821b91d0b2798d1969176a7fd33898206ad066	VszINS3VoBis3vs	t	\N
email:i0@institute.dev	s2:sncY7VQB8TAPDP1H:6b90b6c8b578d01cf22dc27f2971f98ca16465b8ec6b00ee5c2255dc98694c2caaefcd4eb857f88a18591cdc2e24ddda6d4e3d07127314e39a41cb7ba4f09de5	kon3fZBSBMYkxYl	t	\N
email:i1@institute.dev	s2:cGSnrG0hiUk6oG46:4d44adc7313efca7c85e80e22eed1851e839cc43e5de6408135e4d53c69f2f034aa015db12d946393af968732b43798180b80144b42cbc650448f7921f1c35c6	hIYcr0pvVqdgOZ7	t	\N
email:i2@institute.dev	s2:5JeWDmyrMYlHiHte:d307a7344a4ca9e6bf186540d3b4e06c0cf698d00c2a2ea98380781b72625136bc21554d8c32d90e7cc0ea3efcd6135e5d4ae728c4c1f421a6f9e9ab9bac65e5	jLQfBtmap854Vvi	t	\N
email:i3@institute.dev	s2:AezBwY2B3q8nxq1F:8e207989afcf0fdcd8dac35fe0a09ed4d5fca5c65c536d4f4000be6aae6309185f126154eed4afbfe093436249886c847b5eb3c3547f38501e6f94f7bf0297fc	jmekDv24AmtGGNk	t	\N
email:i4@institute.dev	s2:u8HKsVpzmMHdAYFj:67b837170cd6b9daf0860cd01e19f49943131b03ca03d28d3220216a5b508f1094e173a4252de78290bd1678f48998211607c346c48de03c009b7b181699950b	OlNMbtnD9OSBasx	t	\N
email:i5@institute.dev	s2:FOnMn9HhT6UGwtmY:8c2aa5c4d5af074f9060ca83f1483a66180eaaac4e61d2f4ca4ba00758dc28d09466c8fa6c4685e3c8fd9274da26570fbb11547a91347be0820e85255d3dcf1f	6tLaSXTMJS9Ve7a	t	\N
email:i6@institute.dev	s2:4EG3oR7JYrLExo2R:30af5871cbe2c27dd9536b1e64ad2292241a26e87b259673d0db9d04fab9680049602ae96212ebda32095d93215a45b559c01e703b9b70a548488cf4ce5d7c84	d8xWCMrC2XJLj8e	t	\N
email:i7@institute.dev	s2:edYm7S9ALYRBf9gi:f27ddabd937d2a1d15cc367428a09aeb609aa528d1a660d17105b99a5f549c99135e2937a11764561e819cecb964f3f47794719dff8decc26bf15c00d8d3dde1	Qp1JhBRHBIAyGbN	t	\N
email:i8@institute.dev	s2:hsxrQ0cQtQAv3IRo:18b45c7893531b19e6e3c7c1d71ffb11686cf4d49d987b59db9d16acd04adc5803da1d57e0ad46120b90b4b312d53bd94f0a1f54f28d5b85eff2b0207a086c90	wDPFEPbjay8aaYK	t	\N
email:i9@institute.dev	s2:TEQZWyIgKpun28pp:72e0e3e0c6670ec25d12b2b8f7d6249fb0ccd5b5a7027932dd5ec10b3d598020a7b822a8d166d10a01e1402118143dce31febb166f57db032ee6e2134ff7b2ea	fimb4bnlxaNV8p7	t	\N
email:esteban@admin.com	s2:ha8vnzydTJLLq3re:38dffd418f596266604b6717682d91684002141ae81030e44002e64aafe07985b98802fda77af20b8edc3e57c6857d40f0297d6e6466b5afeb33172d4dc6010f	4Q0hIfKdE6Ei7OI	t	\N
email:jesus@admin.com	s2:VSjVtplWExBFBm2N:b7622e540b7adc9627c54771729c26701f42fb24a6fbfcb54d13112167709b64c3dabfde5a12a5abaef36f6716784cb90368a51f5128f28c3e3dffa5325d8127	LDdTjyMgKLM2tgo	t	\N
email:myriam@admin.com	s2:JdiGCcGzg5Q307MD:a5332aca4abb9caf1074a43297fe7095bc72c4726b66d15917a82c58a2d20c039ed8ac48ccb375741cfab5827fccdf3099a6315e9092c26f157909c1da4ae83b	nieAkFoasIErb3i	t	\N
\.


--
-- Data for Name: AuthSession; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."AuthSession" (id, user_id, active_expires, idle_expires) FROM stdin;
BGc9S72qFqqWeKmXiPhfiDI3kSiAwvSJGasWEhUN	4Q0hIfKdE6Ei7OI	1722189048792	1722189048792
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Category" (id, title, "createdAt", "updatedAt") FROM stdin;
clxyzlnwv0000vxytw6wf0m79	Tecnología	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0001vxytzujuopr4	Ciencia	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0002vxytyfgxrego	Negocios	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0003vxytdicakj41	Arte	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0004vxytow9dmr9l	Educación	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0005vxyt32bof0qq	Salud	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0006vxyt9crrvzrw	Deportes	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0007vxytpaw22289	Música	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0008vxytkx5r6izw	Cine	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv0009vxytz8ell2f8	Moda	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000avxyt2qtxczdn	Cocina	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000bvxyt7k7uvmyb	Arquitectura	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000cvxytcn2v9wjz	Psicología	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000dvxytdznkyexe	Medio ambiente	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000evxyt3nf91qic	Política	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000fvxytixcfhrem	Historia	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000gvxyt462yh3cm	Literatura	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000hvxytxg0ww15g	Filosofía	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000ivxyt4gph1usx	Ciencias sociales	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000jvxyt9opsyq53	Matemáticas	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000kvxyt1457znr9	Física	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000lvxytzr9kmkay	Informática	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000mvxytse8ywfpm	Química	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000nvxytkb81l232	Biología	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000ovxytthod276a	Geología	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000pvxyt5dd6swg3	Astronomía	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000qvxytqjsusc3e	Antropología	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000rvxyt8rcjarwi	Sociología	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000svxytnd02a9wr	Economía	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000tvxytau91y7lo	Derecho	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000uvxytpsjhdy0q	Medicina	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000vvxyt77vwzdud	Ingeniería	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000wvxytpo4m0ksm	Periodismo	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
clxyzlnwv000xvxyt143ewbrn	Publicidad	2024-06-28 17:48:30.415	2024-06-28 17:48:30.415
\.


--
-- Data for Name: Location; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Location" (id, title, "createdAt", "updatedAt") FROM stdin;
clxyzlnyi000yvxyth732uj09	Amazonas, Atures (Puerto Ayacucho)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj000zvxytig72avpr	Amazonas, Alto Orinoco (La Esmeralda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0010vxytn20maeth	Amazonas, Atabapo (San Fernando Atabapo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0011vxyt7yhsllre	Amazonas, Autana (Isla Ratón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0012vxyt3ngozmmw	Amazonas, Manapiare (San Juan de Manapiare)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0013vxyt4druqgfo	Amazonas, Río Negro (San Carlos de Río Negro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0014vxyt9bpt7ykq	Amazonas, Maroa (Maroa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0015vxyt4oku7uiu	Anzoátegui, Anaco (Anaco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0016vxyt4idy2nmw	Anzoátegui, Aragua (Aragua de Barcelona)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0017vxytqvsk5g7k	Anzoátegui, Bolívar (Barcelona)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0018vxyt3zs0nh8c	Anzoátegui, Bruzual (Clarines)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj0019vxyt7vjljatw	Anzoátegui, Cajigal (Onoto)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001avxytcyfa3b4d	Anzoátegui, Carvajal (Valle de Guanape)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001bvxytp9gfrj3y	Anzoátegui, Freites (Cantaura)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001cvxyt6a71r1o0	Anzoátegui, Guanipa (San José de Guanipa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001dvxyt5ei3ipdo	Anzoátegui, Guanta (Guanta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001evxytank11pm5	Anzoátegui, Independencia (Soledad)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001fvxyt1pzs2ow4	Anzoátegui, Libertad (San Mateo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001gvxyt4tsmynkb	Anzoátegui, Sir Arthur McGregor (El Chaparro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001hvxytv4r1m9nn	Anzoátegui, Miranda (Pariaguán)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001ivxyt7kwuxo3j	Anzoátegui, Monagas (Mapire)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001jvxyt2z3iofhl	Anzoátegui, Peñalver (Puerto Píritu)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001kvxytgrol36k8	Anzoátegui, Píritu (Píritu)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001lvxytawsu0cq5	Anzoátegui, San Juan de Capistrano (Boca de Uchire)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001mvxyt25pmt04u	Anzoátegui, Santa Ana (Santa Ana)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001nvxytsc3pym2l	Anzoátegui, Simón Rodríguez (El Tigre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001ovxyt77u7tuof	Anzoátegui, Sotillo (Puerto La Cruz)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001pvxyt5n154yn5	Anzoátegui, Turístico Diego Bautista Urbaneja (Lechería)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001qvxytbpoyojp5	Apure, Achaguas (Achaguas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyj001rvxytei5qa2dw	Apure, Biruaca (Biruaca)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001svxytluzhoxhc	Apure, San Juan de Payara (Pedro Camejo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001tvxytxgcfu7m6	Apure, Bruzual (Muñoz)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001uvxytg8zkqu1m	Apure, Guasdualito (Páez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001vvxytiwgkakkz	Apure, Elorza (Rómulo Gallegos)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001wvxytnyboolwe	Apure, San Fernando de Apure (San Fernando)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001xvxytnwpjz8pn	Aragua, Santa Rita (Alcántara)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001yvxytua70ft2j	Aragua, San Mateo (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk001zvxythvdi4k98	Aragua, Camatagua (Camatagua)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0020vxytlbh1fsme	Aragua, Maracay (Girardot)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0021vxytjqr95fxw	Aragua, El Limón (Iragorry)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0022vxyta05jg88x	Aragua, Santa Cruz de Aragua (Lamas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0023vxyt6douzbgl	Aragua, Palo Negro (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0024vxytn2a18jug	Aragua, Turmero (Mariño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0025vxyt2sjdzzhz	Aragua, Las Tejerías (Michelena)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0026vxyt3nifw424	Aragua, Ocumare de la Costa (Ocumare de la Costa de Oro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0027vxytce81pmpd	Aragua, El Consejo (Revenga)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0028vxyt0dvvk50e	Aragua, La Victoria (Ribas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0029vxytltfkc7wm	Aragua, San Casimiro (San Casimiro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002avxyt14bemynu	Aragua, San Sebastián de los Reyes (San Sebastián)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002bvxytwe56k1uo	Aragua, Cagua (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002cvxyt9yjc578q	Aragua, Colonia Tovar (Tovar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002dvxyt7etky0j1	Aragua, Barbacoas (Urdaneta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002evxyt4xw3t8wz	Aragua, Villa de Cura (Zamora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002fvxytxhsuzeq7	Barinas, Sabaneta (Alberto Arvelo Torrealba)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002gvxyt1xkse1h9	Barinas, El Cantón (Andrés Eloy Blanco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002hvxytu6v8lzh3	Barinas, Socopó (Antonio José de Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002ivxytuju4jzu9	Barinas, Arismendi (Arismendi)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002jvxytbgsf386h	Barinas, Barinas (Barinas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002kvxytwnhdvz7y	Barinas, Barinitas (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002lvxytnefq12cy	Barinas, Barrancas (Cruz Paredes)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002mvxytc9jwq4l5	Barinas, Santa Bárbara (Ezequiel Zamora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002nvxytqgzfiucp	Barinas, Obispos (Obispos)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002ovxytjwdln879	Barinas, Ciudad Bolivia (Pedraza)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002pvxytaozacozw	Barinas, Libertad (Rojas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002qvxyt6ua8686t	Barinas, Ciudad de Nutrias (Sosa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002rvxyt8gkzmrje	Bolívar, Ciudad Piar (Angostura)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002svxyt7nt1bjxo	Bolívar, Ciudad Bolívar (Angostura del Orinoco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002tvxyto3gty3rb	Bolívar, Ciudad Guayana (Caroní)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002uvxyto57cbajk	Bolívar, Caicara del Orinoco (Cedeño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002vvxyt98oaiunr	Bolívar, El Palmar (Chien)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002wvxytzwhtuotk	Bolívar, El Callao (El Callao)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002xvxytbzzblbwe	Bolívar, Santa Elena de Uairén (Gran Sabana)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002yvxytgnqblp0z	Bolívar, Upata (Piar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk002zvxyt7epyq8e7	Bolívar, Guasipati (Roscio)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0030vxytw4g4pszb	Bolívar, El Dorado (Sifontes)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0031vxyt4mzvcxsn	Bolívar, Maripa (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0032vxytrone7xj3	Carabobo, Bejuma (Bejuma)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0033vxyte3yyorwn	Carabobo, Güigüe (Carlos Arvelo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0034vxyt6xwkhvq3	Carabobo, Mariara (Diego Ibarra)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0035vxyt3o60d2tx	Carabobo, Guacara (Guacara)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0036vxyt64avtsib	Carabobo, Morón (Juan José Mora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0037vxyt6x1ixq41	Carabobo, Tocuyito (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0038vxytn7vk67q8	Carabobo, Los Guayos (Los Guayos)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk0039vxyt80qt6ydc	Carabobo, Miranda (Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003avxyt3z382dob	Carabobo, Montalbán (Montalbán)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003bvxytotmei5ze	Carabobo, Naguanagua (Naguanagua)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003cvxythq3416fj	Carabobo, Puerto Cabello (Puerto Cabello)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003dvxytav20h0ox	Carabobo, San Diego (San Diego)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003evxytukom1orq	Carabobo, San Joaquín (San Joaquín)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003fvxyt1vpqhujf	Carabobo, Valencia (Valencia)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003gvxyttkmv8cbn	Cojedes, San Carlos (San Carlos)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003hvxyt6kcqlmnu	Cojedes, El Baúl (Girardot)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003ivxytm37ojmc3	Cojedes, Macapo (Lima Blanco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003jvxyta1w3rlyt	Cojedes, El Pao (Pao de San Juan Bautista)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003kvxyto1th0222	Cojedes, Libertad (Ricaurte)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003lvxyt33kdba72	Cojedes, Las Vegas (Rómulo Gallegos)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyk003mvxytynkvg0m8	Cojedes, Tinaco (Tinaco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003nvxytmpkvxeis	Cojedes, Tinaquillo (Tinaquillo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003ovxyt75dktlmq	Delta Amacuro, Curiapo (Antonio Díaz)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003pvxyt319b50mf	Delta Amacuro, Sierra Imataca (Casacoima)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003qvxyt1a31u790	Delta Amacuro, Pedernales (Pedernales)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003rvxytfdawl93t	Delta Amacuro, Tucupita (Tucupita)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003svxytbeanf6p1	Distrito Capital, Caracas (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003tvxyt48rxzpdx	Falcón, San Juan de los Cayos (Acosta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003uvxytq6e40cl3	Falcón, San Luis (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003vvxytelj8czm6	Falcón, Capatárida (Buchivacoa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003wvxytpkqw0g5j	Falcón, Punto Fijo (Carirubana)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003xvxytbiqt2el3	Falcón, La Vela de Coro (Colina)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003yvxyt1n7txqnu	Falcón, Dabajuro (Dabajuro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl003zvxytnqbuyncm	Falcón, Pedregal (Democracia)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0040vxytkv4ak21t	Falcón, Pueblo Nuevo (Falcón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0041vxytpht998xn	Falcón, Churuguara (Federación)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0042vxyt36tu3azx	Falcón, Chichiriviche (Iturriza)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0043vxyt6pmnx2c9	Falcón, Jacura (Jacura)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0044vxyts25z976x	Falcón, Santa Cruz de Los Taques (Los Taques)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0045vxytfr7006r6	Falcón, Yaracal (Manaure)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0046vxytwybwuse8	Falcón, Mene de Mauroa (Mauroa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0047vxytps25u2gs	Falcón, Santa Ana de Coro (Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0048vxyt9fk88124	Falcón, Palmasola (Palmasola)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0049vxyt3djkqhbb	Falcón, Cabure (Petit)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004avxyt33ruyfbt	Falcón, Píritu (Píritu)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004bvxytkn52jvaa	Falcón, Mirimire (San Francisco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004cvxytvzmslj1p	Falcón, La Cruz de Taratara (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004dvxyt8ahydxre	Falcón, Tucacas (Silva)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004evxytloc0tg7b	Falcón, Tocópero (Tocópero)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004fvxytpzfokmra	Falcón, Santa Cruz de Bucaral (Unión)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004gvxytknmo1yr6	Falcón, Urumaco (Urumaco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004hvxytf3oznfga	Falcón, Puerto Cumarebo (Zamora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004ivxyt6esv55q1	Guárico, Camaguán (Camaguán)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004jvxytrlkv4ylz	Guárico, Chaguaramas (Chaguaramas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004kvxyt0q79otlu	Guárico, El Socorro (El Socorro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004lvxyt5i5ypddt	Guárico, Calabozo (Francisco de Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004mvxytgrd8nnhu	Guárico, Tucupido (José Félix Ribas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004nvxytfffafoj9	Guárico, Altagracia de Orituco (José Tadeo Monagas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004ovxytvyq318z0	Guárico, San Juan de los Morros (Juan Germán Roscio)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004pvxytstmm7r1r	Guárico, Las Mercedes (Juan José Rondón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004qvxytsyhl0mdo	Guárico, El Sombrero (Julián Mellado)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004rvxytj9z09a18	Guárico, Valle de La Pascua (Leonardo Infante)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004svxytatxx7opd	Guárico, Ortiz (Ortiz)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004tvxytnu7ubnvo	Guárico, Guayabal (San Gerónimo de Guayabal)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004uvxyt1qdsp5dl	Guárico, San José de Guaribe (San José de Guaribe)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004vvxytrejry9kn	Guárico, Santa María de Ipire (Santa María de Ipire)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004wvxytc2d41oxl	Guárico, Zaraza (Zaraza)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004xvxytry1o5l7h	Lara, Sanare (Andrés Eloy Blanco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004yvxytr1nm4iw5	Lara, Duaca (Crespo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl004zvxytaj1cwr2j	Lara, Barquisimeto (Iribarren)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0050vxytc1ymxfpd	Lara, Quibor (Jiménez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0051vxytqq5bspea	Lara, El Tocuyo (Morán)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0052vxyt8ps0w1k7	Lara, Cabudare (Palavecino)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0053vxytnp1ezgwg	Lara, Sarare (Simón Planas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0054vxyt63997cqk	Lara, Carora (Torres)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0055vxytbk3hxidu	Lara, Siquisique (Urdaneta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0056vxytat90tf3u	Mérida, El Vigía (Alberto Adriani)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0057vxythqjiuitz	Mérida, La Azulita (Andrés Bello)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0058vxytlg0zlzuu	Mérida, Santa Cruz de Mora (Antonio Pinto Salinas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl0059vxytsu6v1ya4	Mérida, Aricagua (Aricagua)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005avxytr3ogdzhq	Mérida, Canaguá (Arzobispo Chacón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005bvxytid10xibe	Mérida, Ejido (Campo Elías)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005cvxytb7imoqnh	Mérida, Tucaní (Caracciolo Parra Olmedo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005dvxyty4p8u4yq	Mérida, Santo Domingo (Cardenal Quintero)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005evxytn9n0sbld	Mérida, Guaraque (Guaraque)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005fvxyttau4svnr	Mérida, Arapuey (Julio Cesar Salas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005gvxytrbos01p3	Mérida, Torondoy (Justo Briceño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005hvxyt9grhdxiz	Mérida, Mérida (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005ivxytbvagw5r6	Mérida, Timotes (Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005jvxytfb5qiqmc	Mérida, Santa Elena de Arenales (Obispo Ramos de Lora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005kvxytqwkur60d	Mérida, Santa María de Caparo (Padre Noguera)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005lvxytrvzmee7c	Mérida, Pueblo Llano (Pueblo Llano)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyl005mvxytwnok9685	Mérida, Mucuchíes (Rangel)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005nvxytq1n8kjp3	Mérida, Bailadores (Rivas Dávila)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005ovxytwt7i0m5g	Mérida, Tabay (Santos Marquina)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005pvxytni5jph48	Mérida, Lagunillas (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005qvxytsk2pw609	Mérida, Tovar (Tovar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005rvxyta2usun3a	Mérida, Nueva Bolivia (Tulio Febres Cordero)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005svxyt3x35hia2	Mérida, Zea (Zea)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005tvxytv2pt8vpt	Miranda, El Vigía (Alberto Adriani)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005uvxyt8pcmoqnc	Miranda, La Azulita (Andrés Bello)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005vvxytchpzfdo5	Miranda, Santa Cruz de Mora (Antonio Pinto Salinas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005wvxytwk36wg8n	Miranda, Aricagua (Aricagua)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005xvxytjz0hoiam	Miranda, Canaguá (Arzobispo Chacón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005yvxytajlrke84	Miranda, Ejido (Campo Elías)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym005zvxyt3znv1wkg	Miranda, Tucaní (Caracciolo Parra Olmedo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0060vxytkcu830yr	Miranda, Santo Domingo (Cardenal Quintero)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0061vxytse0tb3g8	Miranda, Guaraque (Guaraque)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0062vxytay4z3nv0	Miranda, Arapuey (Julio Cesar Salas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0063vxytf8heb60t	Miranda, Torondoy (Justo Briceño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0064vxytge63abr9	Miranda, Mérida (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0065vxytncp0jf7w	Miranda, Timotes (Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0066vxytodop6jza	Miranda, Santa Elena de Arenales (Obispo Ramos de Lora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0067vxytguk3en12	Miranda, Santa María de Caparo (Padre Noguera)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0068vxyt0ylv8hnv	Miranda, Pueblo Llano (Pueblo Llano)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym0069vxytdcmtuos9	Miranda, Mucuchíes (Rangel)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006avxytekjhrzzx	Miranda, Bailadores (Rivas Dávila)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006bvxyt9yb0ko5t	Miranda, Tabay (Santos Marquina)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006cvxyt3pa9oxu8	Miranda, Lagunillas (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006dvxytqsno2s9b	Miranda, Tovar (Tovar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006evxytc4su12dh	Miranda, Nueva Bolivia (Tulio Febres Cordero)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006fvxytg5ss3zf9	Miranda, Zea (Zea)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006gvxyt5gqnbaiz	Monagas, San Antonio de Capayacuar (Acosta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006hvxytw79bjit8	Monagas, Aguasay (Aguasay)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006ivxyt1sdf1svg	Monagas, Caripito (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006jvxyt5mzr3mbf	Monagas, Caripe (Caripe)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006kvxyt8t4yn0kk	Monagas, Caicara de Maturín (Cedeño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006lvxytixstzhnr	Monagas, Temblador (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006mvxytfv03wl3o	Monagas, Maturín (Maturín)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006nvxytmfgthyuq	Monagas, Aragua de Maturín (Piar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnym006ovxytg6s3pl0i	Monagas, Quiriquire (Punceres)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006pvxytb5box9c2	Monagas, Santa Bárbara (Santa Bárbara)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006qvxytc1oby4sl	Monagas, Barrancas del Orinoco (Sotillo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006rvxyt5br7egnd	Monagas, Uracoa (Uracoa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006svxyts30nsp84	Monagas, Punta de Mata (Zamora)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006tvxyt05m2nxau	Nueva Esparta, Paraguachí (Antolín del Campo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006uvxyt7wh8y8o6	Nueva Esparta, San Juan Bautista (Antonio Díaz)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006vvxytlcm92gde	Nueva Esparta, La Asunción (Arismendi)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006wvxyteuolw5h7	Nueva Esparta, El Valle (García)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006xvxyttttzqje1	Nueva Esparta, Santa Ana (Gómez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006yvxyt7ji7mghn	Nueva Esparta, Boca de Río (Macanao)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn006zvxyte4z37urx	Nueva Esparta, Pampatar (Maneiro)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0070vxytnwsxycm7	Nueva Esparta, Juan Griego (Marcano)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0071vxytkpthgtvt	Nueva Esparta, Porlamar (Mariño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0072vxyt5jckitf9	Nueva Esparta, Punta de Piedras (Tubores)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0073vxyt0y0ym6g0	Nueva Esparta, San Pedro de Coche (Villalba)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0074vxytxwdyjmck	Portuguesa, Agua Blanca (Agua Blanca)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0075vxytga4267g7	Portuguesa, Araure (Araure)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0076vxytw7ljcmlw	Portuguesa, Píritu (Esteller)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0077vxytmvaxurpf	Portuguesa, Guanare (Guanare)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0078vxytddh6nhv1	Portuguesa, Guanarito (Guanarito)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0079vxythyuvzhn2	Portuguesa, Chabasquén (José Vicente de Unda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007avxytj1dijcp4	Portuguesa, Ospino (Ospino)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007bvxytuwhyo1p4	Portuguesa, Acarigua (Páez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007cvxytg5n2fw0y	Portuguesa, Papelón (Papelón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007dvxytseicwvry	Portuguesa, Boconoíto (San Genaro de Boconoíto)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007evxytkahkobc6	Portuguesa, San Rafael de Onoto (San Rafael de Onoto)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007fvxytboha6xns	Portuguesa, El Playón (Santa Rosalía)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007gvxytkbudyx2c	Portuguesa, Biscucuy (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007hvxyt4je81flc	Portuguesa, Villa Bruzual (Turén)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007ivxyt48bg3c3y	Sucre, Casanay (Andrés Eloy Blanco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007jvxytkvludo30	Sucre, San José de Aerocuar (Andrés Mata)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007kvxytrpbhbjeb	Sucre, Río Caribe (Arismendi)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007lvxytk10aiq1l	Sucre, El Pilar (Benítez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007mvxyt5urxbe7k	Sucre, Carúpano (Bermúdez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007nvxyt6rn8w8ps	Sucre, Marigüitar (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007ovxytce0y5j3b	Sucre, Yaguaraparo (Cajigal)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007pvxytwmx2j0d6	Sucre, Araya (Cruz Salmerón Acosta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007qvxyta7f49pgh	Sucre, Tunapuy (Libertador)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007rvxytm4svgr3b	Sucre, Irapa (Mariño)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007svxyt1m6n7mou	Sucre, San Antonio del Golfo (Mejía)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007tvxytdkc0p2dv	Sucre, Cumanacoa (Montes)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007uvxyt98s7rt6b	Sucre, Cariaco (Ribero)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007vvxyte2k8szdv	Sucre, Cumaná (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007wvxytjvzt2x6q	Sucre, Güiria (Valdez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007xvxytg0caqcob	Tachira, Cordero (Andrés Bello)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007yvxytfknd4txg	Tachira, Las Mesas (Antonio Rómulo Costa)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn007zvxytp9skeg54	Tachira, Colón (Ayacucho)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0080vxyt7tz9p2tm	Tachira, San Antonio del Táchira (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0081vxytou57ytuv	Tachira, Táriba (Cárdenas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0082vxytft53y7kb	Tachira, Santa Ana de Táchira (Córdoba)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0083vxyt1fc2aipn	Tachira, San Rafael del Piñal (Fernández)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0084vxytyihh9mtk	Tachira, San José de Bolívar (Francisco de Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0085vxytrhizsxyn	Tachira, La Fría (García de Hevia)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0086vxytmv3nhmr9	Tachira, Palmira (Guásimos)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0087vxytaxafxrxj	Tachira, Capacho Nuevo (Independencia)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0088vxytrx9gpven	Tachira, La Grita (Jáuregui)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn0089vxytukogyeot	Tachira, El Cobre (José María Vargas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn008avxyt6su8731v	Tachira, Rubio (Junín)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn008bvxytmsy2b3dp	Tachira, Capacho Viejo (Libertad)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn008cvxytqobubvwf	Tachira, Lobatera (Lobatera)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyn008dvxytuh7xwj37	Tachira, Michelena (Michelena)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008evxyt3gwper74	Tachira, Coloncito (Panamericano)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008fvxytk35j9vxr	Tachira, Ureña (Pedro María Ureña)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008gvxyt64fe1gpk	Tachira, Delicias (Rafael Urdaneta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008hvxyt96oqx5fr	Tachira, La Tendida (Samuel Dario Maldonado)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008ivxytg7e69mxh	Tachira, San Cristóbal (San Cristóbal)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008jvxyt79k2ju9d	Tachira, Umuquena (San Judas Tadeo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008kvxyt21ztck0n	Tachira, Seboruco (Seboruco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008lvxytf5dg1w1a	Tachira, San Simón (Simón Rodríguez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008mvxytmpqiwklb	Tachira, Queniquea (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008nvxytemozfjnf	Tachira, San Josecito (Torbes)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008ovxyt3xgimirh	Tachira, Pregonero (Uribante)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008pvxytko5u43tv	Trujillo, Santa Isabel (Andrés Bello)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008qvxytzamgzu9b	Trujillo, Boconó (Boconó)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008rvxyto63w78g5	Trujillo, Sabana Grande (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008svxyte8tfbxjd	Trujillo, Chejendé (Candelaria)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008tvxytu7r8dczu	Trujillo, Carache (Carache)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008uvxytuxlky19w	Trujillo, Carvajal (Carvajal)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008vvxytfrbtyld8	Trujillo, Escuque (Escuque)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008wvxytq17djp8e	Trujillo, Campo Elías (Juan Vicente Campo Elías)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008xvxytsv71ov2g	Trujillo, Santa Apolonia (La Ceiba)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008yvxytrr8du9la	Trujillo, El Paradero (Márquez Cañizales)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo008zvxyt3ff2l91d	Trujillo, El Dividive (Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0090vxyt5kk8o5sl	Trujillo, Monte Carmelo (Monte Carmelo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0091vxytccedm4h2	Trujillo, Motatán (Motatán)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0092vxytbn4ud64x	Trujillo, Pampán (Pampán)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0093vxytm9qcsqxo	Trujillo, Pampanito (Pampanito)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0094vxytzzxqr43y	Trujillo, Betijoque (Rangel)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0095vxytjy8lnppu	Trujillo, Sabana de Mendoza (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0096vxyt13hb5798	Trujillo, Trujillo (Trujillo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0097vxythak5iglj	Trujillo, La Quebrada (Urdaneta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0098vxytz14s8ba3	Trujillo, Valera (Valera)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo0099vxytxpewzszx	Vargas, La Guaira (Vargas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009avxytphzitp55	Yaracuy, San Pablo (Arístides Bastidas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009bvxytuy792diw	Yaracuy, Aroa (Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009cvxyt3mbtf35s	Yaracuy, Chivacoa (Bruzual)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009dvxyte7t8rjtl	Yaracuy, Cocorote (Cocorote)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009evxytk34x9kpm	Yaracuy, Independencia (Independencia)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009fvxyt44n29cnl	Yaracuy, Sabana de Parra (José Antonio Páez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009gvxytnqybxleu	Yaracuy, Boraure (La Trinidad)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009hvxyth84525hg	Yaracuy, Yumare (Manuel Monge)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009ivxytmy0oxp34	Yaracuy, Nirgua (Nirgua)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009jvxyty9d5e5r7	Yaracuy, Yaritagua (Peña)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009kvxyt3uxd9950	Yaracuy, San Felipe (San Felipe)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009lvxyteyg0nd8l	Yaracuy, Guama (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009mvxyt3ttxtp58	Yaracuy, Urachiche (Urachiche)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009nvxyturyrmqtt	Yaracuy, Farriar (Veroes)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009ovxytpm7jtkom	Zulia, El Toro (Almirante Padilla)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009pvxyt2w4kvqcp	Zulia, San Timoteo (Baralt)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009qvxytlx4bs3ll	Zulia, Cabimas (Cabimas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009rvxytpptfzwzc	Zulia, Encontrados (Catatumbo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009svxytqud0cnvz	Zulia, San Carlos del Zulia (Colón)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009tvxyt9uv7l4wa	Zulia, Pueblo Nuevo-El Chivo (Francisco Javier Pulgar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009uvxytsydoiyvl	Zulia, Sinamaica (Guajira)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009vvxytxw8pwwuv	Zulia, La Concepción (Jesús Enrique Lossada)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009wvxytbh9zovod	Zulia, Casigua El Cubo (Jesús María Semprún)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009xvxytaz58yn2i	Zulia, Concepción (La Cañada de Urdaneta)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009yvxytphfnz2qo	Zulia, Ciudad Ojeda (Lagunillas)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo009zvxyt62s7d5is	Zulia, Machiques (Machiques)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a0vxytkxqsvd9w	Zulia, San Rafael del Moján (Mara)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a1vxyt3ze736xa	Zulia, Maracaibo (Maracaibo)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a2vxytbfo04wrm	Zulia, Los Puertos de Altagracia (Miranda)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a3vxytugubza5e	Zulia, La Villa del Rosario (Rosario de Perijá)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a4vxyttwdsk1oo	Zulia, San Francisco (San Francisco)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a5vxytu2h3rr1t	Zulia, Santa Rita (Santa Rita)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a6vxytpabp2ipf	Zulia, Tía Juana (Simón Bolívar)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a7vxytkqennfo0	Zulia, Bobures (Sucre)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
clxyzlnyo00a8vxytt9jocmj7	Zulia, Bachaquero (Valmore Rodríguez)	2024-06-28 17:48:30.474	2024-06-28 17:48:30.474
\.


--
-- Data for Name: Company; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Company" (id, name, email, image, description, phone, certification, "verifiedAt", "authUserId", "createdAt", "updatedAt", "locationId", rif) FROM stdin;
clxyzls2o00dkvxytlj0rm5lj	WebMasters	c0@company.dev	/company2.png	Especializa en el diseño, desarrollo y mantenimiento de sitios web profesionales para empresas de todos los sectores.	04163956724	/rif.png	2024-06-28 17:48:35.805	tq7UXF7l9G035sk	2024-06-28 17:48:35.808	2024-06-28 17:48:35.808	clxyzlnyo008gvxyt64fe1gpk	7265605154
clxyzlsiw00dlvxytfatbyzks	Enterprise	c1@company.dev	/company2.png	La empresa ofrece soluciones tecnológicas avanzadas para impulsar la transformación digital y la innovación en las empresas.	04125220722	/rif.png	2024-06-28 17:48:36.39	zyG4a3M5t9Hh7Qm	2024-06-28 17:48:36.392	2024-06-28 17:48:36.392	clxyzlnyo009gvxytnqybxleu	1557335479
clxyzlsyg00dmvxytflmccym3	WebWorks	c2@company.dev	/company2.png	Especializa en el diseño, desarrollo y mantenimiento de sitios web profesionales para empresas de todos los sectores.	04146330597	/rif.png	2024-06-28 17:48:36.949	evXlsF83joljf1M	2024-06-28 17:48:36.952	2024-06-28 17:48:36.952	clxyzlnyo009bvxytuy792diw	9251273474
clxyzltfv00dnvxythvv9u3bp	TechSolutions	c3@company.dev	/company1.jpg	La empresa ofrece soluciones tecnológicas personalizadas para abordar los desafíos empresariales y mejorar la eficiencia operativa.	04243839187	/rif.png	2024-06-28 17:48:37.577	El3kkpnGgEmyZqo	2024-06-28 17:48:37.579	2024-06-28 17:48:37.579	clxyzlnyo0097vxythak5iglj	2572513993
clxyzltuj00dovxyt6xy3u3vv	WebMasters	c4@company.dev	/company1.jpg	Especializa en el diseño, desarrollo y mantenimiento de sitios web profesionales para empresas de todos los sectores.	04122702870	/rif.png	2024-06-28 17:48:38.105	Ax4WqQYCY1V6Eil	2024-06-28 17:48:38.108	2024-06-28 17:48:38.108	clxyzlnyk002hvxytu6v8lzh3	6915423922
clxyzlu9l00dpvxyti43o71qc	VirtuTech	c5@company.dev	/company1.jpg	Especializa en el desarrollo de soluciones tecnológicas virtuales para optimizar la productividad y la colaboración empresarial.	04148559852	/rif.png	2024-06-28 17:48:38.647	QvKIHWaHUpSMFgV	2024-06-28 17:48:38.649	2024-06-28 17:48:38.649	clxyzlnyj001mvxyt25pmt04u	8123607671
clxyzluom00dqvxyty4ztbf37	InfiniTech	c6@company.dev	/company2.png	Enfoca en la creación de soluciones tecnológicas innovadoras e infinitas para impulsar el crecimiento empresarial.	04149225558	/rif.png	\N	ZBhq1i2ERVjysln	2024-06-28 17:48:39.19	2024-06-28 17:48:39.19	clxyzlnyo009dvxyte7t8rjtl	5107979494
clxyzlv3k00drvxyteq63hs0f	TechNova	c7@company.dev	/company2.png	Dedica a ofrecer soluciones tecnológicas innovadoras para impulsar el crecimiento y la transformación digital de las empresas.	04123571617	/rif.png	2024-06-28 17:48:39.726	snOI59Dqx2u1Sfk	2024-06-28 17:48:39.728	2024-06-28 17:48:39.728	clxyzlnyj001lvxytawsu0cq5	6356612133
clxyzlvik00dsvxytwp7dlxo8	CodeCraft	c8@company.dev	/company2.png	Dedica al desarrollo de soluciones personalizadas y de alta calidad para satisfacer las necesidades empresariales.	04123365250	/rif.png	2024-06-28 17:48:40.266	dN7O6God4weCXq3	2024-06-28 17:48:40.268	2024-06-28 17:48:40.268	clxyzlnyl005avxytr3ogdzhq	4551093601
clxyzlvzk00dtvxyt92njp93i	PixelPerfect	c9@company.dev	/company1.jpg	La empresa es una empresa de diseño y desarrollo digital que se enfoca en crear experiencias visuales impactantes y de alta calidad para las empresas.	04248869157	/rif.png	2024-06-28 17:48:40.878	VszINS3VoBis3vs	2024-06-28 17:48:40.88	2024-06-28 17:48:40.88	clxyzlnyl0052vxyt8ps0w1k7	8371654615
\.


--
-- Data for Name: Person; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Person" (id, name, email, image, phone, "authUserId", "createdAt", "updatedAt", birth, ci, description, schedule, employable, "locationId", gender) FROM stdin;
clxyzlojl00davxyti8hlue08	José Martínez	u0@user.dev	/person3.webp	04261240615	SLzbbJt1OP2Ai1D	2024-06-28 17:48:31.233	2024-06-28 17:48:31.233	1996-06-28 17:48:30.854	30288662	Como diseñador gráfico, mi objetivo es crear interfaces atractivas y funcionales que brinden una excelente experiencia de usuario.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyl004tvxytnu7ubnvo	MALE
clxyzlos600dbvxytk7ukhabx	Gonzalo Sánchez	u1@user.dev	/person1.jpeg	04128211582	e4tCHsE09P8xnb6	2024-06-28 17:48:31.543	2024-06-28 17:48:31.543	1996-06-28 17:48:30.854	123123	Soy un especialista en diseño de interacción y experiencia de usuario, enfocado en crear productos digitales que sean fáciles de usar y atractivos.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	t	clxyzlnyj001jvxyt2z3iofhl	MALE
clxyzlp2e00dcvxytkej59ozk	Diego Cárdenas	u2@user.dev	/person1.jpeg	04149791491	dRiGkilDFqcwQMB	2024-06-28 17:48:31.91	2024-06-28 17:48:31.91	1999-06-28 17:48:30.854	17303270	Mi especialidad es el marketing digital, centrándome en la creación de estrategias que mejoren la experiencia de usuario en línea.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyk0026vxyt3nifw424	FEMALE
clxyzlpe100ddvxytbq5xl57h	Nicolás Briceño	u3@user.dev	/person1.jpeg	04167741643	s3e9xnImyTwkoFE	2024-06-28 17:48:32.33	2024-06-28 17:48:32.33	2004-06-28 17:48:30.854	14547476	Como consultor de experiencia de usuario, mi objetivo es mejorar la usabilidad y la satisfacción del usuario en los productos digitales.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyj000zvxytig72avpr	FEMALE
clxyzlpqe00devxyt9kk8uhnc	Roberto Briceño	u4@user.dev	/person3.webp	04268244355	0pPDpCWYq9gFkgt	2024-06-28 17:48:32.774	2024-06-28 17:48:32.774	1998-06-28 17:48:30.854	49357200	Como diseñador gráfico, mi objetivo es crear interfaces atractivas y funcionales que brinden una excelente experiencia de usuario.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyk002jvxytbgsf386h	MALE
clxyzlq0n00dfvxytllyse2tw	David Jiménez	u5@user.dev	/person1.jpeg	04263050767	fn2jI3gChbtZETi	2024-06-28 17:48:33.143	2024-06-28 17:48:33.143	2006-06-28 17:48:30.854	12850855	Mi objetivo como desarrollador web es crear aplicaciones y sitios web que brinden una experiencia de usuario excepcional.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	t	clxyzlnyn007yvxytfknd4txg	MALE
clxyzlqca00dgvxytmb72d25h	Julián Delgado	u6@user.dev	/person1.jpeg	04243675373	Pzz9STyL0W3zvNB	2024-06-28 17:48:33.563	2024-06-28 17:48:33.563	1997-06-28 17:48:30.854	36617503	Me especializo en la experiencia de usuario y diseño de interacción, creando interfaces que sean intuitivas y agradables de usar.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyj0010vxytn20maeth	FEMALE
clxyzlqop00dhvxyt9acxjypl	Ignacio Cárdenas	u7@user.dev	/person1.jpeg	04121417958	TT1kqHqKX7CFfZV	2024-06-28 17:48:34.009	2024-06-28 17:48:34.009	1996-06-28 17:48:30.854	9282791	Mi objetivo como desarrollador web es crear aplicaciones y sitios web que brinden una experiencia de usuario excepcional.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyl004jvxytrlkv4ylz	MALE
clxyzlr2900divxyt2lq0s5q5	Rubén Delgado	u8@user.dev	/person2.webp	04161796527	igX0iTOcNbFpwDF	2024-06-28 17:48:34.498	2024-06-28 17:48:34.498	2000-06-28 17:48:30.854	11310359	Mi enfoque principal como desarrollador web es crear sitios web que sean accesibles, rápidos y brinden una excelente experiencia de usuario.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnym006evxytc4su12dh	MALE
clxyzlrho00djvxytzqntoe14	Raúl Sánchez	u9@user.dev	/person2.webp	04246484969	4kqWD1xHRs2Ep3f	2024-06-28 17:48:35.053	2024-06-28 17:48:35.053	1996-06-28 17:48:30.854	27624963	Mi enfoque principal como desarrollador web es crear sitios web que sean accesibles, rápidos y brinden una excelente experiencia de usuario.	[[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, true, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [true, true, true, true, true, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false]]	f	clxyzlnyj001avxytcyfa3b4d	MALE
\.


--
-- Data for Name: Leader; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Leader" (id, "personId", "companyId", "createdAt", "updatedAt") FROM stdin;
clxyzm16c00i7vxytjj1y1uzo	\N	clxyzlv3k00drvxyteq63hs0f	2024-06-28 17:48:47.605	2024-06-28 17:48:47.605
clxyzm16t00ibvxytl80vedsn	\N	clxyzlu9l00dpvxyti43o71qc	2024-06-28 17:48:47.621	2024-06-28 17:48:47.621
clxyzm17300ifvxytl8wdra6z	clxyzlos600dbvxytk7ukhabx	\N	2024-06-28 17:48:47.631	2024-06-28 17:48:47.631
clxyzm17i00ijvxytuod2j92m	\N	clxyzlsiw00dlvxytfatbyzks	2024-06-28 17:48:47.646	2024-06-28 17:48:47.646
clxyzm17p00invxytjj8i4e65	\N	clxyzlsiw00dlvxytfatbyzks	2024-06-28 17:48:47.654	2024-06-28 17:48:47.654
clxyzm17x00irvxyt291017kf	\N	clxyzltfv00dnvxythvv9u3bp	2024-06-28 17:48:47.662	2024-06-28 17:48:47.662
clxyzm18500ivvxytbi2xyy9s	\N	clxyzlu9l00dpvxyti43o71qc	2024-06-28 17:48:47.669	2024-06-28 17:48:47.669
clxyzm18d00izvxytcyf7my7n	clxyzlrho00djvxytzqntoe14	\N	2024-06-28 17:48:47.678	2024-06-28 17:48:47.678
clxyzm18n00j3vxytjdwjo9oq	\N	clxyzls2o00dkvxytlj0rm5lj	2024-06-28 17:48:47.687	2024-06-28 17:48:47.687
clxyzm18z00j7vxyte1aa3hy1	clxyzlrho00djvxytzqntoe14	\N	2024-06-28 17:48:47.7	2024-06-28 17:48:47.7
clxyzm19b00jbvxytxt2h9fog	clxyzlr2900divxyt2lq0s5q5	\N	2024-06-28 17:48:47.712	2024-06-28 17:48:47.712
clxyzm19o00jfvxytgnhdtb79	\N	clxyzlu9l00dpvxyti43o71qc	2024-06-28 17:48:47.724	2024-06-28 17:48:47.724
clxyzm19z00jjvxytqlgw1erf	\N	clxyzlvik00dsvxytwp7dlxo8	2024-06-28 17:48:47.735	2024-06-28 17:48:47.735
clxyzm1a800jnvxyt2kv7qeje	\N	clxyzlsiw00dlvxytfatbyzks	2024-06-28 17:48:47.744	2024-06-28 17:48:47.744
clxyzm1aj00jrvxytg4fizyv4	\N	clxyzltfv00dnvxythvv9u3bp	2024-06-28 17:48:47.755	2024-06-28 17:48:47.755
clxyzm1as00jvvxytoliqzrm4	clxyzlr2900divxyt2lq0s5q5	\N	2024-06-28 17:48:47.765	2024-06-28 17:48:47.765
clxyzm1b700jzvxyttokexbg8	\N	clxyzluom00dqvxyty4ztbf37	2024-06-28 17:48:47.779	2024-06-28 17:48:47.779
clxyzm1bi00k3vxyt68n58iex	clxyzlrho00djvxytzqntoe14	\N	2024-06-28 17:48:47.79	2024-06-28 17:48:47.79
clxyzm1bt00k7vxyt2iplnkks	\N	clxyzltfv00dnvxythvv9u3bp	2024-06-28 17:48:47.801	2024-06-28 17:48:47.801
clxyzm1c100kbvxytlz3yqquu	clxyzlqop00dhvxyt9acxjypl	\N	2024-06-28 17:48:47.81	2024-06-28 17:48:47.81
clxyzm1ca00kfvxytg2di21bc	\N	clxyzlsyg00dmvxytflmccym3	2024-06-28 17:48:47.819	2024-06-28 17:48:47.819
clxyzm1ci00kjvxytl36ip9u4	\N	clxyzltfv00dnvxythvv9u3bp	2024-06-28 17:48:47.826	2024-06-28 17:48:47.826
clxyzm1cr00knvxyt0pub9o7i	clxyzlrho00djvxytzqntoe14	\N	2024-06-28 17:48:47.836	2024-06-28 17:48:47.836
clxyzm1cy00krvxytrfer6mxh	clxyzlq0n00dfvxytllyse2tw	\N	2024-06-28 17:48:47.842	2024-06-28 17:48:47.842
clxyzm1d700kvvxyt0n65kn86	\N	clxyzlsyg00dmvxytflmccym3	2024-06-28 17:48:47.851	2024-06-28 17:48:47.851
clxyzm1de00kzvxytlm5ctcul	\N	clxyzlsiw00dlvxytfatbyzks	2024-06-28 17:48:47.858	2024-06-28 17:48:47.858
clxyzm1dm00l3vxythsf78yji	clxyzlpqe00devxyt9kk8uhnc	\N	2024-06-28 17:48:47.866	2024-06-28 17:48:47.866
clxyzm1du00l7vxytlv6j0ut9	\N	clxyzluom00dqvxyty4ztbf37	2024-06-28 17:48:47.874	2024-06-28 17:48:47.874
clxyzm1e300lbvxytjos89wdq	clxyzlq0n00dfvxytllyse2tw	\N	2024-06-28 17:48:47.883	2024-06-28 17:48:47.883
clxyzm1ee00lfvxytv2v23tt6	\N	clxyzlvzk00dtvxyt92njp93i	2024-06-28 17:48:47.894	2024-06-28 17:48:47.894
clxyzm1eo00ljvxytlt975adh	\N	clxyzlvik00dsvxytwp7dlxo8	2024-06-28 17:48:47.904	2024-06-28 17:48:47.904
clxyzm1ev00lnvxytrsg234ju	\N	clxyzlu9l00dpvxyti43o71qc	2024-06-28 17:48:47.912	2024-06-28 17:48:47.912
clxyzmdfw01i7vxyth1uht7ng	clxyzlos600dbvxytk7ukhabx	\N	2024-06-28 17:49:03.5	2024-06-28 17:49:03.5
\.


--
-- Data for Name: Team; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Team" (id, name, description, "createdAt", "updatedAt", "featuredUntil", "leaderId", code) FROM stdin;
clxyzm16m00i9vxythmrvqj2e	Equipo de desarrollo de software	Grupo de trabajo encargado del desarrollo de software para una empresa de tecnología.	2024-06-28 17:48:47.614	2024-06-28 17:48:47.614	\N	clxyzm16c00i7vxytjj1y1uzo	EQ-794580
clxyzm16x00idvxytxr6o7dpp	Equipo de análisis de datos	Grupo de trabajo encargado del análisis de datos para una empresa de investigación de mercado.	2024-06-28 17:48:47.625	2024-06-28 17:48:47.625	\N	clxyzm16t00ibvxytl80vedsn	EQ-650480
clxyzm17b00ihvxytzqegtjtm	Equipo de diseño gráfico	Grupo de trabajo encargado del diseño gráfico para una agencia de publicidad.	2024-06-28 17:48:47.639	2024-06-28 17:48:47.639	\N	clxyzm17300ifvxytl8wdra6z	EQ-665687
clxyzm17l00ilvxyt8k9fak8y	Equipo de gestión de proyectos	Grupo de trabajo encargado de la gestión de proyectos para una empresa de consultoría.	2024-06-28 17:48:47.65	2024-06-28 17:48:47.65	\N	clxyzm17i00ijvxytuod2j92m	EQ-400185
clxyzm17t00ipvxytohxs43nb	Equipo de marketing digital	Grupo de trabajo encargado del marketing digital para una empresa de comercio electrónico.	2024-06-28 17:48:47.658	2024-06-28 17:48:47.658	\N	clxyzm17p00invxytjj8i4e65	EQ-990776
clxyzm18100itvxytbnxjb5bm	Equipo de soporte técnico	Grupo de trabajo encargado del soporte técnico para una empresa de servicios de tecnología.	2024-06-28 17:48:47.665	2024-06-28 17:48:47.665	\N	clxyzm17x00irvxyt291017kf	EQ-375147
clxyzm18900ixvxyt4bjkpf5g	Equipo de recursos humanos	Grupo de trabajo encargado de los recursos humanos para una empresa de manufactura.	2024-06-28 17:48:47.674	2024-06-28 17:48:47.674	\N	clxyzm18500ivvxytbi2xyy9s	EQ-384698
clxyzm18i00j1vxytdwlmgb1r	Equipo de finanzas	Grupo de trabajo encargado de las finanzas para una empresa de servicios financieros.	2024-06-28 17:48:47.683	2024-06-28 17:48:47.683	\N	clxyzm18d00izvxytcyf7my7n	EQ-169744
clxyzm18t00j5vxytsfyntlx2	Equipo de ventas	Grupo de trabajo encargado de las ventas para una empresa de productos de consumo.	2024-06-28 17:48:47.693	2024-06-28 17:48:47.693	\N	clxyzm18n00j3vxytjdwjo9oq	EQ-302486
clxyzm19600j9vxytn2vhxwvb	Equipo de logística	Grupo de trabajo encargado de la logística para una empresa de transporte y distribución.	2024-06-28 17:48:47.707	2024-06-28 17:48:47.707	\N	clxyzm18z00j7vxyte1aa3hy1	EQ-252521
clxyzm19g00jdvxytp5un25iu	Equipo de desarrollo de videojuegos	Grupo de trabajo encargado del desarrollo de videojuegos para una empresa de entretenimiento.	2024-06-28 17:48:47.716	2024-06-28 17:48:47.716	\N	clxyzm19b00jbvxytxt2h9fog	EQ-232871
clxyzm19t00jhvxytyuemro8o	Equipo de investigación y desarrollo	Grupo de trabajo encargado de la investigación y desarrollo de nuevos productos para una empresa de tecnología.	2024-06-28 17:48:47.729	2024-06-28 17:48:47.729	\N	clxyzm19o00jfvxytgnhdtb79	EQ-276968
clxyzm1a300jlvxytn37finp1	Equipo de atención al cliente	Grupo de trabajo encargado de la atención al cliente para una empresa de servicios.	2024-06-28 17:48:47.739	2024-06-28 17:48:47.739	\N	clxyzm19z00jjvxytqlgw1erf	EQ-225417
clxyzm1ad00jpvxytp10hyo1b	Equipo de gestión de la cadena de suministro	Grupo de trabajo encargado de la gestión de la cadena de suministro para una empresa de manufactura.	2024-06-28 17:48:47.749	2024-06-28 17:48:47.749	\N	clxyzm1a800jnvxyt2kv7qeje	EQ-598359
clxyzm1an00jtvxytj50zdtdm	Equipo de gestión de la calidad	Grupo de trabajo encargado de la gestión de la calidad para una empresa de servicios.	2024-06-28 17:48:47.759	2024-06-28 17:48:47.759	\N	clxyzm1aj00jrvxytg4fizyv4	EQ-514123
clxyzm1b100jxvxytjjozs8iw	Equipo de gestión de proyectos de construcción	Grupo de trabajo encargado de la gestión de proyectos de construcción para una empresa de construcción.	2024-06-28 17:48:47.773	2024-06-28 17:48:47.773	\N	clxyzm1as00jvvxytoliqzrm4	EQ-758073
clxyzm1bc00k1vxythwp6bqzv	Equipo de seguridad informática	Grupo de trabajo encargado de la seguridad informática para una empresa de tecnología.	2024-06-28 17:48:47.784	2024-06-28 17:48:47.784	\N	clxyzm1b700jzvxyttokexbg8	EQ-177404
clxyzm1bn00k5vxytrvk1em0c	Equipo de recursos naturales	Grupo de trabajo encargado de la gestión de los recursos naturales para una empresa de energía.	2024-06-28 17:48:47.795	2024-06-28 17:48:47.795	\N	clxyzm1bi00k3vxyt68n58iex	EQ-788219
clxyzm1bx00k9vxytf5ztgmch	Equipo de investigación de mercado	Grupo de trabajo encargado de la investigación de mercado para una empresa de servicios de marketing.	2024-06-28 17:48:47.805	2024-06-28 17:48:47.805	\N	clxyzm1bt00k7vxyt2iplnkks	EQ-628814
clxyzm1c500kdvxyt2oj431y3	Equipo de desarrollo de aplicaciones móviles	Grupo de trabajo encargado del desarrollo de aplicaciones móviles para una empresa de tecnología.	2024-06-28 17:48:47.813	2024-06-28 17:48:47.813	\N	clxyzm1c100kbvxytlz3yqquu	EQ-362228
clxyzm1ce00khvxytas5nlo30	Equipo de gestión de la innovación	Grupo de trabajo encargado de la gestión de la innovación para una empresa de tecnología.	2024-06-28 17:48:47.822	2024-06-28 17:48:47.822	\N	clxyzm1ca00kfvxytg2di21bc	EQ-433711
clxyzm1cm00klvxytbju084d0	Equipo de recursos humanos internacionales	Grupo de trabajo encargado de los recursos humanos internacionales para una empresa multinacional.	2024-06-28 17:48:47.831	2024-06-28 17:48:47.831	\N	clxyzm1ci00kjvxytl36ip9u4	EQ-211128
clxyzm1cu00kpvxytmau1mbxt	Equipo de gestión de la cadena de suministro internacional	Grupo de trabajo encargado de la gestión de la cadena de suministro internacional para una empresa multinacional.	2024-06-28 17:48:47.839	2024-06-28 17:48:47.839	\N	clxyzm1cr00knvxyt0pub9o7i	EQ-950110
clxyzm1d100ktvxytetp8thye	Equipo de desarrollo de software para dispositivos móviles	Grupo de trabajo encargado del desarrollo de software para dispositivos móviles para una empresa de tecnología.	2024-06-28 17:48:47.845	2024-06-28 17:48:47.845	\N	clxyzm1cy00krvxytrfer6mxh	EQ-189246
clxyzm1da00kxvxyt5yxsg1i0	Equipo de gestión de proyectos de software	Grupo de trabajo encargado de la gestión de proyectos de software para una empresa de tecnología.	2024-06-28 17:48:47.854	2024-06-28 17:48:47.854	\N	clxyzm1d700kvvxyt0n65kn86	EQ-643114
clxyzm1dh00l1vxythyt2r4k8	Equipo de diseño de productos	Grupo de trabajo encargado del diseño de productos para una empresa de manufactura.	2024-06-28 17:48:47.861	2024-06-28 17:48:47.861	\N	clxyzm1de00kzvxytlm5ctcul	EQ-958627
clxyzm1dq00l5vxyt246v7476	Equipo de gestión de la cadena de suministro de alimentos	Grupo de trabajo encargado de la gestión de la cadena de suministro de alimentos para una empresa de alimentos y bebidas.	2024-06-28 17:48:47.87	2024-06-28 17:48:47.87	\N	clxyzm1dm00l3vxythsf78yji	EQ-760572
clxyzm1dx00l9vxyt8h1njd12	Equipo de gestión de la cadena de suministro de moda	Grupo de trabajo encargado de la gestión de la cadena de suministro de moda para una empresa de moda y accesorios.	2024-06-28 17:48:47.877	2024-06-28 17:48:47.877	\N	clxyzm1du00l7vxytlv6j0ut9	EQ-104596
clxyzm1ea00ldvxytaohqtznr	Equipo de gestión de la cadena de suministro de electrónica	Grupo de trabajo encargado de la gestión de la cadena de suministro de electrónica para una empresa de tecnología.	2024-06-28 17:48:47.89	2024-06-28 17:48:47.89	\N	clxyzm1e300lbvxytjos89wdq	EQ-440716
clxyzm1ej00lhvxyt1nk5vme7	Equipo de gestión de la cadena de suministro de automóviles	Grupo de trabajo encargado de la gestión de la cadena de suministro de automóviles para una empresa de automóviles.	2024-06-28 17:48:47.9	2024-06-28 17:48:47.9	\N	clxyzm1ee00lfvxytv2v23tt6	EQ-805527
clxyzm1er00llvxytctcj2t6x	Equipo de gestión de la cadena de suministro de productos farmacéuticos	Grupo de trabajo encargado de la gestión de la cadena de suministro de productos farmacéuticos para una empresa farmacéutica.	2024-06-28 17:48:47.907	2024-06-28 17:48:47.907	\N	clxyzm1eo00ljvxytlt975adh	EQ-473635
clxyzm1f000lpvxytu7f23rwa	Equipo de gestión de la cadena de suministro de productos químicos	Grupo de trabajo encargado de la gestión de la cadena de suministro de productos químicos para una empresa química.	2024-06-28 17:48:47.917	2024-06-28 17:48:47.917	\N	clxyzm1ev00lnvxytrsg234ju	EQ-455284
clxyzmdfv01i6vxyt5q0brwd5	Equipo de finanzas	Disponemos de estrategias de marketing y gestión administrativo-social dedicados al desarrollo de la empresa Mayorca	2024-06-28 17:49:03.5	2024-06-28 17:49:03.5	\N	clxyzmdfw01i7vxyth1uht7ng	EQ-631697
\.


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Project" (id, title, description, image, visibility, "createdAt", "updatedAt", preview, "teamId", "personId", code) FROM stdin;
clxyzm1ie00x1vxytp6ybtfoe	Sistema de gestión de inventario	Una empresa que ofrece un sistema de gestión de inventario para facilitar el control y seguimiento de los productos en stock.	/project1.jpg	PRIVATE	2024-06-28 17:48:48.039	2024-06-28 17:48:48.039	\N	\N	clxyzlqca00dgvxytmb72d25h	PR-328391
clxyzm1im00x3vxyt22ngu580	Plataforma de comercio electrónico	Una plataforma de comercio electrónico que permite a los usuarios vender y comprar productos y servicios en línea de manera segura y conveniente.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.046	2024-06-28 17:48:48.046	\N	\N	clxyzlojl00davxyti8hlue08	PR-868270
clxyzm1iq00x5vxyt6wi3plrx	Aplicación móvil de entrega de comida	Una aplicación móvil de entrega de comida que permite a los usuarios ordenar comida de diferentes restaurantes y recibir la entrega en su ubicación deseada.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.051	2024-06-28 17:48:48.051	\N	\N	clxyzlrho00djvxytzqntoe14	PR-138688
clxyzm1iv00x7vxyt63qjbudo	Sistema de gestión de recursos humanos	Un sistema de gestión de recursos humanos que ayuda a las empresas a administrar eficientemente aspectos relacionados con el personal, como nóminas, vacaciones y evaluaciones de desempeño.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.055	2024-06-28 17:48:48.055	\N	\N	clxyzlpqe00devxyt9kk8uhnc	PR-445867
clxyzm1iz00x9vxyth6vowsev	Plataforma de aprendizaje en línea	Una plataforma de aprendizaje en línea que ofrece cursos y materiales educativos para que los usuarios puedan adquirir conocimientos y habilidades desde cualquier lugar.	/project1.jpg	PUBLIC	2024-06-28 17:48:48.059	2024-06-28 17:48:48.059	\N	\N	clxyzlp2e00dcvxytkej59ozk	PR-245233
clxyzm1j400xbvxyt2acull9f	Aplicación móvil de ejercicio y salud	Una aplicación móvil de ejercicio y salud que brinda a los usuarios acceso a rutinas de ejercicio, seguimiento de progreso y consejos de salud para mantenerse en forma.	/project2.jpg	PRIVATE	2024-06-28 17:48:48.064	2024-06-28 17:48:48.064	\N	\N	clxyzlpqe00devxyt9kk8uhnc	PR-599284
clxyzm1j900xdvxyt6pluiw9m	Sistema de gestión de proyectos	Un sistema de gestión de proyectos que permite a las empresas planificar, organizar y controlar las tareas y recursos necesarios para completar proyectos exitosamente.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.069	2024-06-28 17:48:48.069	\N	clxyzm17b00ihvxytzqegtjtm	\N	PR-175228
clxyzm1je00xfvxyteyvc91i0	Plataforma de reservas en línea	Una plataforma de reservas en línea que facilita a los usuarios reservar servicios como alojamiento, transporte y actividades turísticas de manera rápida y sencilla.	/project2.jpg	PUBLIC	2024-06-28 17:48:48.075	2024-06-28 17:48:48.075	\N	clxyzm1an00jtvxytj50zdtdm	\N	PR-478721
clxyzm1jl00xhvxyt57mxcfd1	Aplicación móvil de viajes	Una aplicación móvil de viajes que proporciona información y herramientas útiles para planificar y disfrutar de viajes, incluyendo reservas, guías turísticas y recomendaciones.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.081	2024-06-28 17:48:48.081	\N	\N	clxyzlrho00djvxytzqntoe14	PR-957876
clxyzm1jp00xjvxyt444pri0d	Sistema de gestión de finanzas personales	Un sistema de gestión de finanzas personales que ayuda a los usuarios a administrar sus ingresos, gastos, presupuestos y metas financieras de manera efectiva.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.085	2024-06-28 17:48:48.085	\N	clxyzm1ce00khvxytas5nlo30	\N	PR-930159
clxyzm1jt00xlvxytvkx889a9	Plataforma de publicación de contenido	Una plataforma de publicación de contenido que permite a los usuarios crear, editar y compartir contenido en diferentes formatos, como artículos, imágenes y videos.	/project2.jpg	PRIVATE	2024-06-28 17:48:48.089	2024-06-28 17:48:48.089	\N	clxyzm1ej00lhvxyt1nk5vme7	\N	PR-609927
clxyzm1jy00xnvxytz7shzd1e	Aplicación móvil de noticias	Una aplicación móvil de noticias que ofrece a los usuarios acceso a noticias actualizadas de diferentes fuentes y categorías, manteniéndolos informados sobre los acontecimientos más relevantes.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.094	2024-06-28 17:48:48.094	\N	clxyzm19t00jhvxytyuemro8o	\N	PR-505134
clxyzm1k200xpvxyt6f4ay2gw	Sistema de gestión de relaciones con el cliente	Un sistema de gestión de relaciones con el cliente que ayuda a las empresas a administrar y mejorar las interacciones con sus clientes, desde la captación hasta el servicio postventa.	/project1.jpg	PUBLIC	2024-06-28 17:48:48.099	2024-06-28 17:48:48.099	\N	\N	clxyzlojl00davxyti8hlue08	PR-151293
clxyzm1k700xrvxytypx4k8f0	Plataforma de marketing en línea	Una plataforma de marketing en línea que proporciona herramientas y recursos para que las empresas promocionen sus productos y servicios de manera efectiva en el entorno digital.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.103	2024-06-28 17:48:48.103	\N	clxyzm1cu00kpvxytmau1mbxt	\N	PR-799024
clxyzm1kc00xtvxytxg4fb6k1	Aplicación móvil de compras	Una aplicación móvil de compras que permite a los usuarios explorar y comprar una amplia variedad de productos y servicios de diferentes tiendas en línea.	/project2.jpg	PUBLIC	2024-06-28 17:48:48.109	2024-06-28 17:48:48.109	\N	clxyzm1c500kdvxyt2oj431y3	\N	PR-468867
clxyzm1ki00xvvxytuscmxddb	Sistema de gestión de ventas	Un sistema de gestión de ventas que ayuda a las empresas a administrar y controlar el proceso de ventas, desde la generación de leads hasta el cierre de negocios.	/project1.jpg	PRIVATE	2024-06-28 17:48:48.114	2024-06-28 17:48:48.114	\N	clxyzm1dq00l5vxyt246v7476	\N	PR-955701
clxyzm1kt00xxvxyt6xdlddsb	Plataforma de gestión de eventos	Una plataforma de gestión de eventos que facilita la planificación, organización y ejecución de eventos, desde conferencias y seminarios hasta fiestas y conciertos.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.125	2024-06-28 17:48:48.125	\N	\N	clxyzlr2900divxyt2lq0s5q5	PR-217202
clxyzm1ky00xzvxytlgwetvvp	Aplicación móvil de entretenimiento	Una aplicación móvil de entretenimiento que ofrece a los usuarios acceso a contenido multimedia, como música, películas, juegos y libros, para su entretenimiento y disfrute.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.131	2024-06-28 17:48:48.131	\N	\N	clxyzlqca00dgvxytmb72d25h	PR-189389
clxyzm1l500y1vxytx1xruj4u	Sistema de gestión de inventario para restaurantes	Un sistema de gestión de inventario diseñado específicamente para restaurantes, que ayuda a controlar y administrar los ingredientes, menús y pedidos de manera eficiente.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.137	2024-06-28 17:48:48.137	\N	clxyzm16x00idvxytxr6o7dpp	\N	PR-112469
clxyzm1ld00y3vxytu4rw695z	Plataforma de gestión de proyectos de construcción	Una plataforma de gestión de proyectos especializada en la industria de la construcción, que permite a los equipos planificar, coordinar y ejecutar proyectos de manera efectiva.	/project2.jpg	PRIVATE	2024-06-28 17:48:48.145	2024-06-28 17:48:48.145	\N	\N	clxyzlr2900divxyt2lq0s5q5	PR-247000
clxyzm1lk00y5vxytglvcl87o	Aplicación móvil de aprendizaje de idiomas	Una aplicación móvil de aprendizaje de idiomas que ofrece lecciones interactivas, ejercicios y herramientas de práctica para ayudar a los usuarios a aprender nuevos idiomas.	/project1.jpg	PRIVATE	2024-06-28 17:48:48.152	2024-06-28 17:48:48.152	\N	\N	clxyzlp2e00dcvxytkej59ozk	PR-113844
clxyzm1lp00y7vxyt94ntj2nc	Sistema de gestión de inventario para tiendas minoristas	Un sistema de gestión de inventario diseñado para tiendas minoristas, que facilita el seguimiento y control de los productos en stock, así como la gestión de pedidos y ventas.	/project2.jpg	PUBLIC	2024-06-28 17:48:48.158	2024-06-28 17:48:48.158	\N	clxyzm19600j9vxytn2vhxwvb	\N	PR-417739
clxyzm1lw00y9vxytsk1am69l	Plataforma de gestión de proyectos de software	Una plataforma de gestión de proyectos enfocada en el desarrollo de software, que ayuda a los equipos a planificar, colaborar y entregar proyectos de software de manera eficiente.	/project1.jpg	PRIVATE	2024-06-28 17:48:48.164	2024-06-28 17:48:48.164	\N	\N	clxyzlqca00dgvxytmb72d25h	PR-209007
clxyzm1m300ybvxytmsu41l26	Aplicación móvil de citas	Una aplicación móvil de citas que permite a los usuarios conocer y conectarse con otras personas, ofreciendo funciones de búsqueda, mensajería y citas virtuales.	/project3.jpg	PRIVATE	2024-06-28 17:48:48.172	2024-06-28 17:48:48.172	\N	\N	clxyzlos600dbvxytk7ukhabx	PR-573940
clxyzm1ma00ydvxytexdoagwx	Sistema de gestión de inventario para empresas manufactureras	Un sistema de gestión de inventario diseñado para empresas manufactureras, que facilita el seguimiento y control de los productos en cada etapa del proceso de fabricación.	/project2.jpg	PUBLIC	2024-06-28 17:48:48.178	2024-06-28 17:48:48.178	\N	\N	clxyzlp2e00dcvxytkej59ozk	PR-497643
clxyzm1mg00yfvxytk4qbftkg	Plataforma de gestión de proyectos de marketing	Una plataforma de gestión de proyectos especializada en el área de marketing, que ayuda a los equipos a planificar, ejecutar y medir campañas de marketing de manera efectiva.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.184	2024-06-28 17:48:48.184	\N	clxyzm1dh00l1vxythyt2r4k8	\N	PR-671538
clxyzm1mm00yhvxytcx60skms	Aplicación móvil de edición de fotos	Una aplicación móvil de edición de fotos que ofrece a los usuarios herramientas y filtros para editar y mejorar sus fotos, creando imágenes impresionantes.	/project1.jpg	PUBLIC	2024-06-28 17:48:48.19	2024-06-28 17:48:48.19	\N	\N	clxyzlpe100ddvxytbq5xl57h	PR-769027
clxyzm1mr00yjvxytoxij5o16	Sistema de gestión de inventario para empresas de logística	Un sistema de gestión de inventario diseñado para empresas de logística, que permite el seguimiento y control de los productos en tránsito, así como la gestión de rutas y entregas.	/project2.jpg	PRIVATE	2024-06-28 17:48:48.195	2024-06-28 17:48:48.195	\N	clxyzm1dx00l9vxyt8h1njd12	\N	PR-756263
clxyzm1mx00ylvxyt8dlx9c60	Plataforma de gestión de proyectos de recursos humanos	Una plataforma de gestión de proyectos enfocada en la gestión de recursos humanos, que ayuda a los equipos a planificar, asignar y controlar proyectos relacionados con el personal.	/project3.jpg	PUBLIC	2024-06-28 17:48:48.202	2024-06-28 17:48:48.202	\N	\N	clxyzlp2e00dcvxytkej59ozk	PR-698802
clxyzm1n200ynvxytmzffh7rj	Aplicación móvil de mensajería instantánea	Una aplicación móvil de mensajería instantánea que permite a los usuarios enviar mensajes de texto, voz y multimedia de manera rápida y segura, manteniendo la comunicación en tiempo real.	/project2.jpg	PRIVATE	2024-06-28 17:48:48.207	2024-06-28 17:48:48.207	\N	\N	clxyzlqca00dgvxytmb72d25h	PR-453045
clxyzmdfv01i5vxyty60ei96q	Proyecto administrativo	Proyecto de gestión administrativo-tecnológico de la empresa Mayorca en su departamento de tecnologías y finanzas	/project3.jpg	PUBLIC	2024-06-28 17:49:03.5	2024-06-28 17:49:03.5	\N	clxyzmdfv01i6vxyt5q0brwd5	\N	PR-918552
\.


--
-- Data for Name: Contract; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Contract" (id, title, description, state, price, "projectId", "teamId", "personId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Job; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Job" (id, title, "createdAt", "updatedAt") FROM stdin;
clxyzlo2100cdvxytb9v1i90d	Desarrollador de software	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cevxyteyya8ifg	Ingeniero de software	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cfvxyt3m82j21l	Analista de datos	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cgvxytj2tlsswh	Diseñador gráfico	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100chvxytfsvc15ql	Gerente de proyecto	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100civxytmkdim27j	Contador	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cjvxytz1o7aa61	Abogado	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100ckvxytkz0hurt1	Enfermero/a	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100clvxyto89g83c8	Médico/a	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cmvxyt1iyipasi	Profesor/a	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cnvxytnfdrj32m	Asistente administrativo	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100covxytakvp8xgo	Técnico de soporte	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cpvxytoqu1c7q6	Especialista en marketing digital	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cqvxyt1xjb5lw3	Especialista en recursos humanos	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100crvxyt38ldhamz	Especialista en finanzas	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100csvxytys57vikv	Especialista en relaciones públicas	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100ctvxytlnh6bc2p	Especialista en ventas	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cuvxytk4e22pl0	Especialista en atención al cliente	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cvvxytrqwm107p	Especialista en logística	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cwvxytzppxxq2y	Especialista en compras	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cxvxyt1h2xfulm	Especialista en seguridad informática	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100cyvxythir3z25n	Especialista en redes y comunicaciones	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100czvxytdttb5oje	Especialista en calidad	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d0vxytpao21xgj	Especialista en gestión de proyectos	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d1vxytdfw2w77f	Especialista en gestión de riesgos	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d2vxytga6gl8c5	Especialista en gestión ambiental	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d3vxyt0sb0ao7s	Especialista en gestión de información	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d4vxytij0jsyi4	Especialista en gestión de innovación	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d5vxytj6wuc3ak	Especialista en gestión de calidad	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d6vxytzsfqooet	Especialista en gestión de seguridad	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d7vxyt2uzpb30q	Especialista en gestión de energía	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d8vxytr2piql1e	Especialista en gestión de producción	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
clxyzlo2100d9vxytv22nggdr	Especialista en gestión de tecnología	2024-06-28 17:48:30.601	2024-06-28 17:48:30.601
\.


--
-- Data for Name: Experience; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Experience" (id, name, description, "from", "to", "createdAt", "updatedAt", "personId", "jobId") FROM stdin;
clxyzm0la00e5vxyt34puxvvk	Unilever	Análisis de datos y generación de información valiosa para la toma de decisiones empresariales.	2023-09-05 17:48:46.839	2023-07-21 17:48:46.839	2024-06-28 17:48:46.846	2024-06-28 17:48:46.846	clxyzlojl00davxyti8hlue08	clxyzlo2100ckvxytkz0hurt1
clxyzm0lk00e7vxyt6vvs0yo4	Goldman Sachs	Gestión de sistemas informáticos y garantía de la disponibilidad y el rendimiento de los recursos empresariales.	2024-04-28 17:48:46.854	2023-10-12 17:48:46.854	2024-06-28 17:48:46.856	2024-06-28 17:48:46.856	clxyzlr2900divxyt2lq0s5q5	clxyzlo2100czvxytdttb5oje
clxyzm0lo00e9vxytavorvdtc	Cisco	Análisis de procesos empresariales y propuesta de mejoras para aumentar la eficiencia y la rentabilidad.	2024-04-09 17:48:46.859	2024-03-16 17:48:46.859	2024-06-28 17:48:46.861	2024-06-28 17:48:46.861	clxyzlpe100ddvxytbq5xl57h	clxyzlo2100cnvxytnfdrj32m
clxyzm0lt00ebvxyt2514nlji	Goldman Sachs	Asesoramiento empresarial y propuesta de soluciones para mejorar la rentabilidad y la eficiencia.	2023-06-10 17:48:46.863	2024-02-25 17:48:46.863	2024-06-28 17:48:46.865	2024-06-28 17:48:46.865	clxyzlpqe00devxyt9kk8uhnc	clxyzlo2100d1vxytdfw2w77f
clxyzm0lz00edvxytay617bs1	Bank of America	Gestión de operaciones y procesos empresariales para aumentar la eficiencia y la rentabilidad.	2024-04-19 17:48:46.868	2024-01-05 17:48:46.868	2024-06-28 17:48:46.871	2024-06-28 17:48:46.871	clxyzlos600dbvxytk7ukhabx	clxyzlo2100cvvxytrqwm107p
clxyzm0m300efvxytv2iza0fe	Unilever	Creación de documentación técnica y de usuario para garantizar la comprensión y el uso adecuado de los recursos informáticos.	2023-05-14 17:48:46.874	2024-03-28 17:48:46.874	2024-06-28 17:48:46.876	2024-06-28 17:48:46.876	clxyzlpe100ddvxytbq5xl57h	clxyzlo2100civxytmkdim27j
clxyzm0ma00ehvxyteawz4y90	Bain & Company	Gestión de la calidad y evaluación de los procesos empresariales para garantizar la calidad de los productos y servicios.	2023-12-11 17:48:46.88	2023-07-31 17:48:46.88	2024-06-28 17:48:46.882	2024-06-28 17:48:46.882	clxyzlr2900divxyt2lq0s5q5	clxyzlo2100covxytakvp8xgo
clxyzm0mf00ejvxytata8hrr7	Walmart	Desarrollo de aplicaciones móviles para mejorar la experiencia del usuario y la accesibilidad a los productos y servicios de la empresa.	2023-09-18 17:48:46.885	2023-11-12 17:48:46.885	2024-06-28 17:48:46.887	2024-06-28 17:48:46.887	clxyzlq0n00dfvxytllyse2tw	clxyzlo2100d1vxytdfw2w77f
clxyzm0mm00elvxytzy2qwsev	Citigroup	Desarrollo de estrategias de marketing para aumentar la visibilidad y las ventas de la empresa.	2023-05-21 17:48:46.89	2024-04-22 17:48:46.89	2024-06-28 17:48:46.894	2024-06-28 17:48:46.894	clxyzlq0n00dfvxytllyse2tw	clxyzlo2100cyvxythir3z25n
clxyzm0mu00envxyt139x1ej1	HP	Gestión de inversiones y asesoramiento financiero para maximizar la rentabilidad de la empresa.	2023-09-20 17:48:46.9	2023-12-08 17:48:46.9	2024-06-28 17:48:46.902	2024-06-28 17:48:46.902	clxyzlr2900divxyt2lq0s5q5	clxyzlo2100cpvxytoqu1c7q6
clxyzm0my00epvxytctj319dl	KPMG	Negociación de valores y activos financieros para maximizar la rentabilidad de la empresa.	2023-08-23 17:48:46.905	2024-05-28 17:48:46.905	2024-06-28 17:48:46.907	2024-06-28 17:48:46.907	clxyzlos600dbvxytk7ukhabx	clxyzlo2100cnvxytnfdrj32m
clxyzm0n300ervxytsmscg2uq	McKinsey & Company	Gestión de operaciones y procesos empresariales para aumentar la eficiencia y la rentabilidad.	2023-12-24 17:48:46.909	2023-09-05 17:48:46.909	2024-06-28 17:48:46.911	2024-06-28 17:48:46.911	clxyzlp2e00dcvxytkej59ozk	clxyzlo2100ctvxytlnh6bc2p
clxyzm0n700etvxyt14c1qcv9	JPMorgan Chase	Desarrollo de estrategias de marketing para aumentar la visibilidad y las ventas de la empresa.	2024-03-04 17:48:46.914	2023-11-19 17:48:46.914	2024-06-28 17:48:46.916	2024-06-28 17:48:46.916	clxyzlq0n00dfvxytllyse2tw	clxyzlo2100clvxyto89g83c8
clxyzm0nc00evvxytpyaq2szs	IBM	Gestión de sistemas informáticos y garantía de la disponibilidad y el rendimiento de los recursos empresariales.	2023-11-17 17:48:46.918	2024-02-19 17:48:46.918	2024-06-28 17:48:46.921	2024-06-28 17:48:46.921	clxyzlp2e00dcvxytkej59ozk	clxyzlo2100ckvxytkz0hurt1
clxyzm0nn00exvxytq5uvjqse	JPMorgan Chase	Gestión de la imagen y la reputación de la empresa ante el público y los medios de comunicación.	2023-10-02 17:48:46.929	2023-07-06 17:48:46.929	2024-06-28 17:48:46.931	2024-06-28 17:48:46.931	clxyzlos600dbvxytk7ukhabx	clxyzlo2100civxytmkdim27j
clxyzm0nr00ezvxyt4mt0pzce	Twitter	Gestión de la logística y coordinación de los procesos de transporte y distribución de la empresa.	2023-09-16 17:48:46.934	2023-11-08 17:48:46.934	2024-06-28 17:48:46.935	2024-06-28 17:48:46.935	clxyzlpqe00devxyt9kk8uhnc	clxyzlo2100czvxytdttb5oje
clxyzm0nv00f1vxyt42vhjcxc	Oracle	Investigación de mercados y análisis de tendencias para identificar oportunidades de negocio.	2023-10-29 17:48:46.938	2024-05-19 17:48:46.938	2024-06-28 17:48:46.94	2024-06-28 17:48:46.94	clxyzlq0n00dfvxytllyse2tw	clxyzlo2100czvxytdttb5oje
clxyzm0o000f3vxyto8bcre7z	Dell	Gestión de bases de datos y garantía de la integridad y seguridad de la información empresarial.	2023-05-24 17:48:46.942	2024-02-23 17:48:46.942	2024-06-28 17:48:46.944	2024-06-28 17:48:46.944	clxyzlr2900divxyt2lq0s5q5	clxyzlo2100civxytmkdim27j
clxyzm0o400f5vxytev8uahhy	PwC	Gestión de redes y sistemas informáticos para garantizar la disponibilidad y la seguridad de los recursos empresariales.	2023-06-08 17:48:46.946	2024-05-25 17:48:46.946	2024-06-28 17:48:46.949	2024-06-28 17:48:46.949	clxyzlr2900divxyt2lq0s5q5	clxyzlo2100d3vxyt0sb0ao7s
clxyzm0oe00f7vxyt6o226huz	Walmart	Gestión de la logística y coordinación de los procesos de transporte y distribución de la empresa.	2023-12-24 17:48:46.955	2023-07-29 17:48:46.955	2024-06-28 17:48:46.958	2024-06-28 17:48:46.958	clxyzlr2900divxyt2lq0s5q5	clxyzlo2100cjvxytz1o7aa61
clxyzm0oj00f9vxytvn6fadvd	Google	Auditoría empresarial y evaluación de riesgos para garantizar la transparencia y la legalidad de las operaciones.	2023-11-23 17:48:46.96	2023-07-14 17:48:46.96	2024-06-28 17:48:46.964	2024-06-28 17:48:46.964	clxyzlos600dbvxytk7ukhabx	clxyzlo2100d2vxytga6gl8c5
clxyzm0or00fbvxytd7i02tq5	Deloitte	Desarrollo de sitios web y aplicaciones para mejorar la presencia en línea de la empresa.	2023-07-03 17:48:46.969	2023-06-22 17:48:46.969	2024-06-28 17:48:46.971	2024-06-28 17:48:46.971	clxyzlp2e00dcvxytkej59ozk	clxyzlo2100d8vxytr2piql1e
clxyzm0ov00fdvxytwi5jmhi8	Apple	Gestión de la logística y coordinación de los procesos de transporte y distribución de la empresa.	2023-10-21 17:48:46.974	2023-07-12 17:48:46.974	2024-06-28 17:48:46.976	2024-06-28 17:48:46.976	clxyzlos600dbvxytk7ukhabx	clxyzlo2100csvxytys57vikv
clxyzm0p200ffvxyt4kzqvbbw	Amazon	Gestión de la imagen y la reputación de la empresa ante el público y los medios de comunicación.	2024-02-16 17:48:46.981	2023-08-26 17:48:46.981	2024-06-28 17:48:46.983	2024-06-28 17:48:46.983	clxyzlpe100ddvxytbq5xl57h	clxyzlo2100cwvxytzppxxq2y
clxyzm0p700fhvxytbtospbyu	PepsiCo	Gestión de recursos humanos y desarrollo de políticas para mejorar el ambiente laboral y la productividad.	2023-09-03 17:48:46.985	2024-04-18 17:48:46.985	2024-06-28 17:48:46.987	2024-06-28 17:48:46.987	clxyzlqca00dgvxytmb72d25h	clxyzlo2100cmvxyt1iyipasi
clxyzm0pb00fjvxytw06nxcjw	Oracle	Gestión de proyectos y coordinación de equipos para lograr los objetivos empresariales.	2024-02-05 17:48:46.989	2024-01-19 17:48:46.989	2024-06-28 17:48:46.991	2024-06-28 17:48:46.991	clxyzlpqe00devxyt9kk8uhnc	clxyzlo2100cjvxytz1o7aa61
clxyzm0pn00flvxyt6p9o3uh0	Bain & Company	Investigación de mercados y análisis de tendencias para identificar oportunidades de negocio.	2024-03-05 17:48:47	2023-06-07 17:48:47	2024-06-28 17:48:47.003	2024-06-28 17:48:47.003	clxyzlp2e00dcvxytkej59ozk	clxyzlo2100crvxyt38ldhamz
clxyzm0ps00fnvxytw8n187i9	Bank of America	Gestión de los recursos informáticos y garantía de la seguridad y la integridad de la información empresarial.	2023-05-23 17:48:47.006	2023-12-20 17:48:47.006	2024-06-28 17:48:47.008	2024-06-28 17:48:47.008	clxyzlpqe00devxyt9kk8uhnc	clxyzlo2100d1vxytdfw2w77f
clxyzm0px00fpvxytwam2hnk1	PwC	Gestión de la imagen y la reputación de la empresa ante el público y los medios de comunicación.	2023-07-27 17:48:47.011	2023-08-09 17:48:47.011	2024-06-28 17:48:47.013	2024-06-28 17:48:47.013	clxyzlojl00davxyti8hlue08	clxyzlo2100d1vxytdfw2w77f
clxyzm0q100frvxytgl16vvy6	Oracle	Análisis financiero y gestión de recursos para maximizar la rentabilidad de la empresa.	2023-07-01 17:48:47.016	2023-08-24 17:48:47.016	2024-06-28 17:48:47.018	2024-06-28 17:48:47.018	clxyzlqop00dhvxyt9acxjypl	clxyzlo2100cwvxytzppxxq2y
\.


--
-- Data for Name: Feature; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Feature" (id, title, description, "contractId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: File; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."File" (id, src, "projectId", "createdAt", "updatedAt", title) FROM stdin;
\.


--
-- Data for Name: Grade; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Grade" (id, title, "createdAt", "updatedAt") FROM stdin;
clxyzlo1000c5vxyta1h206vj	Licenciatura en Contaduría	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000c6vxyt6d831m2d	Licenciatura en Administración	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000c7vxyttqb8cue1	Licenciatura en Derecho	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000c8vxytovx6amd0	Ingeniería Electromecánica	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000c9vxyt955acqcc	Ingeniería Agrónoma	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000cavxyttfe49781	Ingeniería Mecánica	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000cbvxytjvsa9pps	Ingeniería en Sistemas	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
clxyzlo1000ccvxyt9qhe0sae	Ingeniería Informática	2024-06-28 17:48:30.565	2024-06-28 17:48:30.565
\.


--
-- Data for Name: Offer; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Offer" (id, title, description, mode, hours, schedule, salary, "limit", "companyId", "expiresAt", "createdAt", "updatedAt", "locationId", "jobId", "featuredUntil") FROM stdin;
clxyzm0rg00ftvxytotk91mj0	Desarrollador de Aplicaciones Web	Desarrollador de Aplicaciones Web	ONSITE	38	FULLTIME	106	46	clxyzlvzk00dtvxyt92njp93i	2024-07-28 17:48:47.062	2024-06-28 17:48:47.068	2024-06-28 17:48:47.068	clxyzlnyo008rvxyto63w78g5	clxyzlo2100d2vxytga6gl8c5	\N
clxyzm0s000fvvxytr742mafv	Desarrollador de Sistemas de Gestión de Contenido	Desarrollador de Sistemas de Gestión de Contenido	ONSITE	33	PARTTIME	276	17	clxyzluom00dqvxyty4ztbf37	2024-07-01 17:48:47.084	2024-06-28 17:48:47.088	2024-06-28 17:48:47.088	clxyzlnyl005lvxytrvzmee7c	clxyzlo2100d1vxytdfw2w77f	\N
clxyzm0sd00fxvxytler2f3as	Desarrollador de Aplicaciones Web	Desarrollador de Aplicaciones Web	ONSITE	45	FULLTIME	215	48	clxyzlv3k00drvxyteq63hs0f	2024-07-13 17:48:47.098	2024-06-28 17:48:47.101	2024-06-28 17:48:47.101	clxyzlnyl003wvxytpkqw0g5j	clxyzlo2100crvxyt38ldhamz	\N
clxyzm0sm00fzvxytr9yq4joe	Desarrollador de Sistemas de Información Empresarial	Desarrollador de Sistemas de Información Empresarial	ONSITE	33	PARTTIME	443	19	clxyzlvzk00dtvxyt92njp93i	2024-07-03 17:48:47.106	2024-06-28 17:48:47.111	2024-06-28 17:48:47.111	clxyzlnyl0058vxytlg0zlzuu	clxyzlo2100chvxytfsvc15ql	\N
clxyzm0sx00g1vxyt2fwyzyha	Especialista en Automatización de Procesos	Especialista en Automatización de Procesos	REMOTE	45	PARTTIME	407	24	clxyzls2o00dkvxytlj0rm5lj	2024-07-05 17:48:47.118	2024-06-28 17:48:47.122	2024-06-28 17:48:47.122	clxyzlnyo008ivxytg7e69mxh	clxyzlo2100covxytakvp8xgo	\N
clxyzm0t600g3vxytqpjtbecg	Desarrollador de Aplicaciones Empresariales	Desarrollador de Aplicaciones Empresariales	REMOTE	11	PARTTIME	314	42	clxyzltfv00dnvxythvv9u3bp	2024-06-29 17:48:47.127	2024-06-28 17:48:47.13	2024-06-28 17:48:47.13	clxyzlnyl004gvxytknmo1yr6	clxyzlo2100cfvxyt3m82j21l	\N
clxyzm0tj00g5vxytlj2e0j02	Desarrollador de Sistemas de Gestión de Recursos Humanos	Desarrollador de Sistemas de Gestión de Recursos Humanos	ONSITE	13	PARTTIME	456	47	clxyzlv3k00drvxyteq63hs0f	2024-07-03 17:48:47.14	2024-06-28 17:48:47.144	2024-06-28 17:48:47.144	clxyzlnyo008qvxytzamgzu9b	clxyzlo2100cqvxyt1xjb5lw3	\N
clxyzm0tw00g7vxythppmpci8	Desarrollador de Aplicaciones Web	Desarrollador de Aplicaciones Web	HYBRID	33	PARTTIME	447	48	clxyzlvzk00dtvxyt92njp93i	2024-07-01 17:48:47.151	2024-06-28 17:48:47.157	2024-06-28 17:48:47.157	clxyzlnyo008rvxyto63w78g5	clxyzlo2100cnvxytnfdrj32m	\N
clxyzm0ua00g9vxyt7s0tmzsw	Especialista en Gestión de Procesos de Negocios	Especialista en Gestión de Procesos de Negocios	ONSITE	21	FULLTIME	172	15	clxyzlv3k00drvxyteq63hs0f	2024-07-13 17:48:47.165	2024-06-28 17:48:47.17	2024-06-28 17:48:47.17	clxyzlnyk0028vxyt0dvvk50e	clxyzlo2100crvxyt38ldhamz	\N
clxyzm0ul00gbvxyty4udn3sd	Especialista en Gestión de la Cadena de Suministro	Especialista en Gestión de la Cadena de Suministro	REMOTE	17	PARTTIME	311	24	clxyzlvzk00dtvxyt92njp93i	2024-07-13 17:48:47.177	2024-06-28 17:48:47.181	2024-06-28 17:48:47.181	clxyzlnyj001fvxyt1pzs2ow4	clxyzlo2100cxvxyt1h2xfulm	\N
clxyzm0uw00gdvxytc59x5biq	Especialista en Gestión de Proyectos	Especialista en Gestión de Proyectos	HYBRID	43	PARTTIME	185	25	clxyzluom00dqvxyty4ztbf37	2024-07-13 17:48:47.188	2024-06-28 17:48:47.192	2024-06-28 17:48:47.192	clxyzlnyl003xvxytbiqt2el3	clxyzlo2100crvxyt38ldhamz	\N
clxyzm0v600gfvxyt0pv48avp	Desarrollador de Sistemas de Control de Versiones	Desarrollador de Sistemas de Control de Versiones	ONSITE	27	PARTTIME	294	23	clxyzlvzk00dtvxyt92njp93i	2024-07-03 17:48:47.199	2024-06-28 17:48:47.202	2024-06-28 17:48:47.202	clxyzlnyj0016vxyt4idy2nmw	clxyzlo2100clvxyto89g83c8	\N
clxyzm0vg00ghvxyttp7cdt7k	Desarrollador de Blockchain	Desarrollador de Blockchain	REMOTE	43	FULLTIME	272	21	clxyzlvzk00dtvxyt92njp93i	2024-07-01 17:48:47.207	2024-06-28 17:48:47.212	2024-06-28 17:48:47.212	clxyzlnym006jvxyt5mzr3mbf	clxyzlo2100cxvxyt1h2xfulm	\N
clxyzm0vr00gjvxyty50ai2b3	Desarrollador de Videojuegos	Desarrollador de Videojuegos	HYBRID	48	FULLTIME	225	10	clxyzlvzk00dtvxyt92njp93i	2024-07-03 17:48:47.217	2024-06-28 17:48:47.223	2024-06-28 17:48:47.223	clxyzlnyl004cvxytvzmslj1p	clxyzlo2100csvxytys57vikv	\N
clxyzm0w100glvxytyrcll71r	Especialista en Gestión de Proyectos de Desarrollo de Software	Especialista en Gestión de Proyectos de Desarrollo de Software	HYBRID	50	FULLTIME	83	44	clxyzlvzk00dtvxyt92njp93i	2024-07-01 17:48:47.227	2024-06-28 17:48:47.233	2024-06-28 17:48:47.233	clxyzlnyl003vvxytelj8czm6	clxyzlo2100covxytakvp8xgo	\N
clxyzm0wf00gnvxytj4xqltl4	Analista de Datos	Analista de Datos	REMOTE	20	PARTTIME	497	49	clxyzluom00dqvxyty4ztbf37	2024-07-13 17:48:47.241	2024-06-28 17:48:47.247	2024-06-28 17:48:47.247	clxyzlnym006hvxytw79bjit8	clxyzlo2100csvxytys57vikv	\N
clxyzm0wr00gpvxytqcwhx3w8	Analista de Datos	Analista de Datos	ONSITE	21	PARTTIME	435	14	clxyzluom00dqvxyty4ztbf37	2024-07-28 17:48:47.255	2024-06-28 17:48:47.259	2024-06-28 17:48:47.259	clxyzlnyk002bvxytwe56k1uo	clxyzlo2100ckvxytkz0hurt1	\N
clxyzm0x100grvxyt8g44cszd	Especialista en Gestión de la Calidad	Especialista en Gestión de la Calidad	ONSITE	47	FULLTIME	178	33	clxyzltuj00dovxyt6xy3u3vv	2024-07-28 17:48:47.265	2024-06-28 17:48:47.269	2024-06-28 17:48:47.269	clxyzlnyl0059vxytsu6v1ya4	clxyzlo2100d7vxyt2uzpb30q	\N
clxyzm0xc00gtvxyt1i2fu4kh	Desarrollador de Sistemas Embebidos	Desarrollador de Sistemas Embebidos	HYBRID	33	PARTTIME	125	23	clxyzlvzk00dtvxyt92njp93i	2024-07-05 17:48:47.276	2024-06-28 17:48:47.28	2024-06-28 17:48:47.28	clxyzlnyo0092vxytbn4ud64x	clxyzlo2100csvxytys57vikv	\N
clxyzm0xl00gvvxyte287wygi	Especialista en Analítica Web	Especialista en Analítica Web	ONSITE	10	FULLTIME	456	11	clxyzlvik00dsvxytwp7dlxo8	2024-07-28 17:48:47.287	2024-06-28 17:48:47.289	2024-06-28 17:48:47.289	clxyzlnyl003rvxytfdawl93t	clxyzlo2100cpvxytoqu1c7q6	\N
clxyzm0xv00gxvxytg5vqmij1	Especialista en Análisis de Negocios	Especialista en Análisis de Negocios	ONSITE	25	PARTTIME	283	47	clxyzltfv00dnvxythvv9u3bp	2024-07-01 17:48:47.294	2024-06-28 17:48:47.3	2024-06-28 17:48:47.3	clxyzlnyn0088vxytrx9gpven	clxyzlo2100cuvxytk4e22pl0	\N
clxyzm0y500gzvxyt8zb7jprv	Desarrollador de Sistemas de Gestión de Aprendizaje	Desarrollador de Sistemas de Gestión de Aprendizaje	REMOTE	13	PARTTIME	473	32	clxyzlsyg00dmvxytflmccym3	2024-07-13 17:48:47.305	2024-06-28 17:48:47.309	2024-06-28 17:48:47.309	clxyzlnyn008dvxytuh7xwj37	clxyzlo2100d5vxytj6wuc3ak	\N
clxyzm0yg00h1vxytfcn98ui2	Desarrollador de Software de Automatización	Desarrollador de Software de Automatización	HYBRID	44	FULLTIME	134	21	clxyzlvzk00dtvxyt92njp93i	2024-07-28 17:48:47.316	2024-06-28 17:48:47.321	2024-06-28 17:48:47.321	clxyzlnyk003hvxyt6kcqlmnu	clxyzlo2100cqvxyt1xjb5lw3	\N
clxyzm0yp00h3vxyt883q0z82	Desarrollador de Realidad Aumentada	Desarrollador de Realidad Aumentada	REMOTE	14	FULLTIME	169	46	clxyzls2o00dkvxytlj0rm5lj	2024-07-13 17:48:47.325	2024-06-28 17:48:47.329	2024-06-28 17:48:47.329	clxyzlnyk002ivxytuju4jzu9	clxyzlo2100cxvxyt1h2xfulm	\N
clxyzm0yy00h5vxyt2qqru2ly	Desarrollador de Aplicaciones Empresariales	Desarrollador de Aplicaciones Empresariales	HYBRID	40	FULLTIME	198	25	clxyzlu9l00dpvxyti43o71qc	2024-07-01 17:48:47.335	2024-06-28 17:48:47.338	2024-06-28 17:48:47.338	clxyzlnyn007rvxytm4svgr3b	clxyzlo2100cpvxytoqu1c7q6	\N
clxyzm0za00h7vxytlmlchb5t	Desarrollador de Aplicaciones Web	Desarrollador de Aplicaciones Web	REMOTE	47	FULLTIME	253	47	clxyzlu9l00dpvxyti43o71qc	2024-07-13 17:48:47.345	2024-06-28 17:48:47.35	2024-06-28 17:48:47.35	clxyzlnyn007rvxytm4svgr3b	clxyzlo2100cpvxytoqu1c7q6	\N
clxyzm0zo00h9vxyt3sxv2ug3	Especialista en Gestión de Proyectos de Desarrollo de Software	Especialista en Gestión de Proyectos de Desarrollo de Software	HYBRID	29	PARTTIME	353	37	clxyzls2o00dkvxytlj0rm5lj	2024-06-29 17:48:47.36	2024-06-28 17:48:47.364	2024-06-28 17:48:47.364	clxyzlnyk0023vxyt6douzbgl	clxyzlo2100d1vxytdfw2w77f	\N
clxyzm10500hbvxythmshdmha	Desarrollador de Sistemas de Gestión de Aprendizaje	Desarrollador de Sistemas de Gestión de Aprendizaje	HYBRID	26	PARTTIME	454	37	clxyzluom00dqvxyty4ztbf37	2024-07-05 17:48:47.376	2024-06-28 17:48:47.381	2024-06-28 17:48:47.381	clxyzlnyl004ivxyt6esv55q1	clxyzlo2100cgvxytj2tlsswh	\N
clxyzm10n00hdvxytpv1bq5ij	Desarrollador de Aplicaciones Web	Desarrollador de Aplicaciones Web	ONSITE	25	FULLTIME	414	44	clxyzlvzk00dtvxyt92njp93i	2024-07-13 17:48:47.394	2024-06-28 17:48:47.4	2024-06-28 17:48:47.4	clxyzlnyk003jvxyta1w3rlyt	clxyzlo2100cfvxyt3m82j21l	\N
clxyzm10w00hfvxytijlgu8rl	Diseñador Gráfico	Diseñador Gráfico	HYBRID	49	FULLTIME	183	22	clxyzltuj00dovxyt6xy3u3vv	2024-07-05 17:48:47.405	2024-06-28 17:48:47.409	2024-06-28 17:48:47.409	clxyzlnyl004jvxytrlkv4ylz	clxyzlo2100ckvxytkz0hurt1	\N
clxyzm11400hhvxytdnqzmtn6	Especialista en Automatización de Procesos	Especialista en Automatización de Procesos	REMOTE	21	PARTTIME	93	29	clxyzlu9l00dpvxyti43o71qc	2024-07-05 17:48:47.413	2024-06-28 17:48:47.416	2024-06-28 17:48:47.416	clxyzlnyj0012vxyt3ngozmmw	clxyzlo2100csvxytys57vikv	\N
clxyzm11a00hjvxytrw6nirf7	Especialista en Redes Sociales	Especialista en Redes Sociales	ONSITE	18	PARTTIME	353	39	clxyzltfv00dnvxythvv9u3bp	2024-07-05 17:48:47.42	2024-06-28 17:48:47.422	2024-06-28 17:48:47.422	clxyzlnyl0048vxyt9fk88124	clxyzlo2100chvxytfsvc15ql	\N
clxyzm11h00hlvxytyjoczcbm	Desarrollador de Inteligencia Artificial	Desarrollador de Inteligencia Artificial	ONSITE	37	FULLTIME	488	28	clxyzlu9l00dpvxyti43o71qc	2024-06-29 17:48:47.426	2024-06-28 17:48:47.429	2024-06-28 17:48:47.429	clxyzlnyn0088vxytrx9gpven	clxyzlo2100d9vxytv22nggdr	\N
clxyzm11r00hnvxytk7ft3am9	Especialista en Gestión de Proyectos de Desarrollo de Software	Especialista en Gestión de Proyectos de Desarrollo de Software	REMOTE	35	PARTTIME	112	23	clxyzlsyg00dmvxytflmccym3	2024-07-03 17:48:47.435	2024-06-28 17:48:47.439	2024-06-28 17:48:47.439	clxyzlnyk001wvxytnyboolwe	clxyzlo2100cuvxytk4e22pl0	\N
clxyzm12200hpvxyttont8euy	Especialista en Gestión de Proyectos	Especialista en Gestión de Proyectos	HYBRID	49	FULLTIME	256	33	clxyzlsyg00dmvxytflmccym3	2024-07-05 17:48:47.447	2024-06-28 17:48:47.45	2024-06-28 17:48:47.45	clxyzlnyo008uvxytuxlky19w	clxyzlo2100cfvxyt3m82j21l	\N
clxyzm12j00hrvxyt3xotb7ts	Desarrollador de Sistemas de Gestión de Contenido	Desarrollador de Sistemas de Gestión de Contenido	HYBRID	45	FULLTIME	164	28	clxyzlvik00dsvxytwp7dlxo8	2024-07-05 17:48:47.463	2024-06-28 17:48:47.467	2024-06-28 17:48:47.467	clxyzlnyl0055vxytbk3hxidu	clxyzlo2100d0vxytpao21xgj	\N
clxyzm12s00htvxytfclkdj8t	Desarrollador de Inteligencia Artificial	Desarrollador de Inteligencia Artificial	REMOTE	33	PARTTIME	256	43	clxyzltfv00dnvxythvv9u3bp	2024-07-28 17:48:47.473	2024-06-28 17:48:47.476	2024-06-28 17:48:47.476	clxyzlnyn0087vxytaxafxrxj	clxyzlo2100d9vxytv22nggdr	\N
clxyzm13100hvvxytma3rqw1g	Especialista en Diseño de Interiores	Especialista en Diseño de Interiores	REMOTE	21	FULLTIME	222	19	clxyzluom00dqvxyty4ztbf37	2024-06-29 17:48:47.483	2024-06-28 17:48:47.486	2024-06-28 17:48:47.486	clxyzlnyk001xvxytnwpjz8pn	clxyzlo2100chvxytfsvc15ql	\N
clxyzm13i00hxvxytm0070m9m	Especialista en Gestión de Proyectos de Tecnología de la Información	Especialista en Gestión de Proyectos de Tecnología de la Información	REMOTE	49	PARTTIME	494	35	clxyzlu9l00dpvxyti43o71qc	2024-06-29 17:48:47.499	2024-06-28 17:48:47.502	2024-06-28 17:48:47.502	clxyzlnyk002xvxytbzzblbwe	clxyzlo2100ckvxytkz0hurt1	\N
clxyzm13p00hzvxyt32pr6h9w	Ingeniero de Software	Ingeniero de Software	REMOTE	20	PARTTIME	179	48	clxyzlu9l00dpvxyti43o71qc	2024-07-03 17:48:47.506	2024-06-28 17:48:47.509	2024-06-28 17:48:47.509	clxyzlnyj001bvxytp9gfrj3y	clxyzlo2100cuvxytk4e22pl0	\N
clxyzm13y00i1vxyt9f6c948d	Ingeniero de Software	Ingeniero de Software	REMOTE	28	PARTTIME	113	33	clxyzluom00dqvxyty4ztbf37	2024-07-28 17:48:47.515	2024-06-28 17:48:47.519	2024-06-28 17:48:47.519	clxyzlnyk002uvxyto57cbajk	clxyzlo2100cfvxyt3m82j21l	\N
clxyzm14k00i3vxytju8p75gx	Desarrollador de Sistemas Embebidos	Desarrollador de Sistemas Embebidos	HYBRID	49	FULLTIME	222	37	clxyzlsyg00dmvxytflmccym3	2024-06-29 17:48:47.526	2024-06-28 17:48:47.54	2024-06-28 17:48:47.54	clxyzlnyo008svxyte8tfbxjd	clxyzlo2100cpvxytoqu1c7q6	\N
clxyzm14v00i5vxyt6nwalxfw	Especialista en Redes Sociales	Especialista en Redes Sociales	REMOTE	32	FULLTIME	507	18	clxyzlu9l00dpvxyti43o71qc	2024-07-13 17:48:47.546	2024-06-28 17:48:47.551	2024-06-28 17:48:47.551	clxyzlnyk003dvxytav20h0ox	clxyzlo2100clvxyto89g83c8	\N
clxyzmdhu01j3vxytk9e9j5fq	Desarrollador front-end	Se busca desarrollador front-end con 2 años de experiencia laboral	ONSITE	40	PARTTIME	180	12	clxyzls2o00dkvxytlj0rm5lj	2024-06-30 17:49:03.568	2024-06-28 17:49:03.571	2024-06-28 17:49:03.571	clxyzlnyk0020vxytlbh1fsme	clxyzlo2100cfvxyt3m82j21l	\N
clxyzmdi201javxyt4294oxwb	Ingeniero en sistemas	Se busca ingeniero en sistemas con años de experiencia laboral para mantenimiento de sistemas de la empresa	ONSITE	40	FULLTIME	180	12	clxyzls2o00dkvxytlj0rm5lj	2024-06-30 17:49:03.577	2024-06-28 17:49:03.579	2024-06-28 17:49:03.579	clxyzlnyk0020vxytlbh1fsme	clxyzlo2100chvxytfsvc15ql	\N
clxyzmdi801jcvxytwk0byvuy	Desarrollador back-end	Se busca desarrollador back-end con 1 año de experiencia laboral, tecnologías deseables: php y jQuery	ONSITE	40	PARTTIME	180	12	clxyzls2o00dkvxytlj0rm5lj	2024-06-30 17:49:03.583	2024-06-28 17:49:03.585	2024-06-28 17:49:03.585	clxyzlnyk0020vxytlbh1fsme	clxyzlo2100cevxyteyya8ifg	\N
\.


--
-- Data for Name: Hiring; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Hiring" (id, status, interested, "offerId", "personId", "createdAt", "updatedAt") FROM stdin;
clxyzmcj401gmvxytey67p9eu	REJECTED	COMPANY	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.32	2024-06-28 17:49:02.32
clxyzmcj701govxyts22v7zdj	PENDING	PERSON	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.324	2024-06-28 17:49:02.324
clxyzmcjb01gqvxytit0yyngz	REJECTED	COMPANY	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.327	2024-06-28 17:49:02.327
clxyzmcjf01gsvxytyi5wfnas	ACCEPTED	PERSON	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.332	2024-06-28 17:49:02.332
clxyzmcjl01guvxytokxlgf7t	PENDING	PERSON	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.337	2024-06-28 17:49:02.337
clxyzmcjo01gwvxytcpj4as7m	PENDING	PERSON	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.341	2024-06-28 17:49:02.341
clxyzmcjr01gyvxyt316hagq5	REJECTED	PERSON	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.344	2024-06-28 17:49:02.344
clxyzmcjw01h0vxythvo9uo1h	PENDING	COMPANY	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.348	2024-06-28 17:49:02.348
clxyzmcjz01h2vxytlheow8h1	PENDING	COMPANY	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.352	2024-06-28 17:49:02.352
clxyzmck301h4vxyttjautnpg	PENDING	PERSON	clxyzm0ua00g9vxyt7s0tmzsw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:02.355	2024-06-28 17:49:02.355
clxyzmdhu01j4vxytujpjig09	ACCEPTED	COMPANY	clxyzmdhu01j3vxytk9e9j5fq	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:49:03.571	2024-06-28 17:49:03.571
clxyzmdhu01j5vxyt1lzc21o3	ACCEPTED	COMPANY	clxyzmdhu01j3vxytk9e9j5fq	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:49:03.571	2024-06-28 17:49:03.571
clxyzmdhu01j6vxytiznoxfri	ACCEPTED	COMPANY	clxyzmdhu01j3vxytk9e9j5fq	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:49:03.571	2024-06-28 17:49:03.571
clxyzmdhu01j7vxyt9zh93yb9	ACCEPTED	COMPANY	clxyzmdhu01j3vxytk9e9j5fq	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:49:03.571	2024-06-28 17:49:03.571
clxyzmdhv01j8vxytv7s00ciz	ACCEPTED	COMPANY	clxyzmdhu01j3vxytk9e9j5fq	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:49:03.571	2024-06-28 17:49:03.571
\.


--
-- Data for Name: Institute; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Institute" (id, name, email, image, description, phone, certification, "verifiedAt", "authUserId", "createdAt", "updatedAt", "locationId", rif) FROM stdin;
clxyzlwhj00duvxytkngjxin8	Universidad Simón Bolívar	i0@institute.dev	/institute2.jpg	Universidad pública ubicada en Caracas, Venezuela. Es una de las principales instituciones de educación superior del país y se especializa en ciencias y tecnología.	04128016189	/rif.png	2024-06-28 17:48:41.517	kon3fZBSBMYkxYl	2024-06-28 17:48:41.527	2024-06-28 17:48:41.527	clxyzlnyo00a3vxytugubza5e	2202058788
clxyzlwxo00dvvxyt1qcxekh4	Universidad Nacional Experimental de los Llanos Centrales	i1@institute.dev	/institute1.jpg	Una universidad pública ubicada en San Juan de los Morros, Venezuela. Se especializa en ciencias, tecnología y humanidades.	04148258894	/rif.png	2024-06-28 17:48:42.107	hIYcr0pvVqdgOZ7	2024-06-28 17:48:42.109	2024-06-28 17:48:42.109	clxyzlnyl003pvxyt319b50mf	3712570391
clxyzlxg900dwvxytszj3v7mn	Universidad Nacional Experimental de los Llanos Centrales	i2@institute.dev	/institute1.jpg	Una universidad pública ubicada en San Juan de los Morros, Venezuela. Se especializa en ciencias, tecnología y humanidades.	04128500276	/rif.png	2024-06-28 17:48:42.774	jLQfBtmap854Vvi	2024-06-28 17:48:42.777	2024-06-28 17:48:42.777	clxyzlnyn0076vxytw7ljcmlw	9921529463
clxyzlxwg00dxvxyttvu2uejf	Universidad Nacional Experimental de la Seguridad	i3@institute.dev	/institute1.jpg	Universidad pública ubicada en Caracas, Venezuela. Se especializa en seguridad y defensa.	04129212087	/rif.png	2024-06-28 17:48:43.358	jmekDv24AmtGGNk	2024-06-28 17:48:43.36	2024-06-28 17:48:43.36	clxyzlnym005pvxytni5jph48	8053417016
clxyzlybr00dyvxyt1v7lbafn	Universidad Simón Bolívar	i4@institute.dev	/institute2.jpg	Universidad pública ubicada en Caracas, Venezuela. Es una de las principales instituciones de educación superior del país y se especializa en ciencias y tecnología.	04147243667	/rif.png	2024-06-28 17:48:43.902	OlNMbtnD9OSBasx	2024-06-28 17:48:43.912	2024-06-28 17:48:43.912	clxyzlnyo009gvxytnqybxleu	1905564072
clxyzlytg00dzvxyt1ty4gs3m	Universidad Nacional Experimental de las Artes	i5@institute.dev	/institute2.jpg	Universidad pública ubicada en Caracas, Venezuela. Se especializa en artes y humanidades.	04145355021	/rif.png	2024-06-28 17:48:44.546	6tLaSXTMJS9Ve7a	2024-06-28 17:48:44.548	2024-06-28 17:48:44.548	clxyzlnyl004avxyt33ruyfbt	9102588476
clxyzlzb800e0vxythwzleihn	Universidad Nacional Experimental de la Seguridad	i6@institute.dev	/institute2.jpg	Universidad pública ubicada en Caracas, Venezuela. Se especializa en seguridad y defensa.	04145131823	/rif.png	2024-06-28 17:48:45.186	d8xWCMrC2XJLj8e	2024-06-28 17:48:45.189	2024-06-28 17:48:45.189	clxyzlnyk002uvxyto57cbajk	2387983121
clxyzlzrl00e1vxytzyzn659d	Universidad Nacional Experimental de la Seguridad	i7@institute.dev	/institute1.jpg	Universidad pública ubicada en Caracas, Venezuela. Se especializa en seguridad y defensa.	04144154720	/rif.png	2024-06-28 17:48:45.774	Qp1JhBRHBIAyGbN	2024-06-28 17:48:45.777	2024-06-28 17:48:45.777	clxyzlnyl004pvxytstmm7r1r	3331022304
clxyzm07d00e2vxytxx1chmpu	Universidad Nacional Experimental de los Llanos Centrales	i8@institute.dev	/institute2.jpg	Una universidad pública ubicada en San Juan de los Morros, Venezuela. Se especializa en ciencias, tecnología y humanidades.	04246224965	/rif.png	2024-06-28 17:48:46.344	wDPFEPbjay8aaYK	2024-06-28 17:48:46.346	2024-06-28 17:48:46.346	clxyzlnyl004zvxytaj1cwr2j	6153534896
clxyzm0k500e3vxyt996aq0do	Universidad Nacional Experimental de la Fuerza Armada	i9@institute.dev	/institute2.jpg	Universidad pública ubicada en Caracas, Venezuela. Se especializa en ciencias militares y defensa.	04161335247	/rif.png	2024-06-28 17:48:46.802	fimb4bnlxaNV8p7	2024-06-28 17:48:46.805	2024-06-28 17:48:46.805	clxyzlnym005zvxyt3znv1wkg	6388579274
\.


--
-- Data for Name: Internship; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Internship" (id, "instituteId", "createdAt", "updatedAt", "personId", "gradeId", hours, status) FROM stdin;
clxyzm1z201etvxytvlvu3od7	clxyzm07d00e2vxytxx1chmpu	2024-06-28 17:48:48.638	2024-06-28 17:48:48.638	clxyzlojl00davxyti8hlue08	clxyzlo1000c7vxyttqb8cue1	42	PENDING
clxyzm1za01evvxytylflcilt	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:48:48.647	2024-06-28 17:48:48.647	clxyzlqop00dhvxyt9acxjypl	clxyzlo1000c7vxyttqb8cue1	24	REJECTED
clxyzm1zj01exvxytf9ddcrbt	clxyzlzb800e0vxythwzleihn	2024-06-28 17:48:48.655	2024-06-28 17:48:48.655	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c6vxyt6d831m2d	30	REJECTED
clxyzm1zq01ezvxyt1ctlj96i	clxyzlytg00dzvxyt1ty4gs3m	2024-06-28 17:48:48.662	2024-06-28 17:48:48.662	clxyzlrho00djvxytzqntoe14	clxyzlo1000cavxyttfe49781	43	REJECTED
clxyzm1zv01f1vxytmrevdbb3	clxyzm0k500e3vxyt996aq0do	2024-06-28 17:48:48.667	2024-06-28 17:48:48.667	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c6vxyt6d831m2d	54	PENDING
clxyzm20401f3vxytqoyfpitf	clxyzlzrl00e1vxytzyzn659d	2024-06-28 17:48:48.676	2024-06-28 17:48:48.676	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c5vxyta1h206vj	44	PENDING
clxyzm20901f5vxyt0vqloeaw	clxyzlzb800e0vxythwzleihn	2024-06-28 17:48:48.682	2024-06-28 17:48:48.682	clxyzlq0n00dfvxytllyse2tw	clxyzlo1000cbvxytjvsa9pps	29	REJECTED
clxyzm20i01f7vxyt0epfusbd	clxyzlxg900dwvxytszj3v7mn	2024-06-28 17:48:48.69	2024-06-28 17:48:48.69	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c5vxyta1h206vj	51	REJECTED
clxyzm20o01f9vxyt75ld938g	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:48:48.696	2024-06-28 17:48:48.696	clxyzlrho00djvxytzqntoe14	clxyzlo1000c6vxyt6d831m2d	39	ACCEPTED
clxyzm20s01fbvxytya4c8y8m	clxyzlxg900dwvxytszj3v7mn	2024-06-28 17:48:48.701	2024-06-28 17:48:48.701	clxyzlos600dbvxytk7ukhabx	clxyzlo1000cavxyttfe49781	42	REJECTED
clxyzmdcv01h6vxyt98j22dmm	clxyzlwxo00dvvxyt1qcxekh4	2024-06-28 17:49:03.391	2024-06-28 17:49:03.391	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c5vxyta1h206vj	24	REJECTED
clxyzmdd701h8vxyte3oa4b9r	clxyzlwxo00dvvxyt1qcxekh4	2024-06-28 17:49:03.403	2024-06-28 17:49:03.403	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c6vxyt6d831m2d	48	PENDING
clxyzmddq01hgvxytsokvokp2	clxyzlwxo00dvvxyt1qcxekh4	2024-06-28 17:49:03.422	2024-06-28 17:49:03.422	clxyzlos600dbvxytk7ukhabx	clxyzlo1000ccvxyt9qhe0sae	36	ACCEPTED
clxyzmdep01hsvxyt9bu2l8m7	clxyzlwxo00dvvxyt1qcxekh4	2024-06-28 17:49:03.457	2024-06-28 17:49:03.457	clxyzlos600dbvxytk7ukhabx	clxyzlo1000cbvxytjvsa9pps	72	ACCEPTED
clxyzmdgw01isvxytnx3h8ynk	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:49:03.536	2024-06-28 17:49:03.536	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c5vxyta1h206vj	24	PENDING
clxyzmdhc01ixvxytw5p2xh00	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:49:03.552	2024-06-28 17:49:03.552	clxyzlp2e00dcvxytkej59ozk	clxyzlo1000c6vxyt6d831m2d	72	PENDING
clxyzmdhc01iyvxytdvw1ihxu	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:49:03.552	2024-06-28 17:49:03.552	clxyzlq0n00dfvxytllyse2tw	clxyzlo1000c9vxyt955acqcc	48	PENDING
clxyzmdhc01izvxytatjgeo9g	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:49:03.552	2024-06-28 17:49:03.552	clxyzlos600dbvxytk7ukhabx	clxyzlo1000c9vxyt955acqcc	24	PENDING
clxyzmdhc01j0vxytnrgbuxv0	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:49:03.552	2024-06-28 17:49:03.552	clxyzlpe100ddvxytbq5xl57h	clxyzlo1000c8vxytovx6amd0	48	PENDING
clxyzmdhc01j1vxytdfe5thi9	clxyzlwhj00duvxytkngjxin8	2024-06-28 17:49:03.552	2024-06-28 17:49:03.552	clxyzlp2e00dcvxytkej59ozk	clxyzlo1000c9vxyt955acqcc	48	PENDING
\.


--
-- Data for Name: Interview; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Interview" (id, date, link, platform, "hiringId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Invitation; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Invitation" (id, status, "teamId", "personId", "createdAt", "updatedAt", interested) FROM stdin;
clxyzm1gw00lqvxyt7qeh46ae	ACCEPTED	clxyzm16m00i9vxythmrvqj2e	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00lrvxytva6m39f0	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00lsvxytjenpnvzp	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00ltvxythu658hwv	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00luvxyt4f2wineu	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00lvvxyty14ynecn	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00lwvxytwvc52z0t	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00lxvxytblmo3dk9	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00lyvxytnfintvm7	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00lzvxyt84l4ek95	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m0vxytabjcjypo	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m1vxyt9brszxmu	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m2vxyty9rfyhkw	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m3vxytjpxyhbwv	PENDING	clxyzm16m00i9vxythmrvqj2e	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m4vxyt3usjn4g2	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00m5vxyt4iv6mcas	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00m6vxyt2zvm137g	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m7vxyt9l4okcf8	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m8vxytxs050o3m	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00m9vxyt11wb8fem	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00mavxyti7wy5rne	ACCEPTED	clxyzm16x00idvxytxr6o7dpp	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mbvxytpheoonxf	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mcvxyto7tb7z89	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mdvxyt0c53fwn6	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mevxytb223f0s3	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mfvxytaylp5gy0	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mgvxytcbd8yiu5	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mhvxytjhr6m9qp	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mivxyter0xrj33	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mjvxyt3li58nap	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mkvxyt7mmzgr84	ACCEPTED	clxyzm17b00ihvxytzqegtjtm	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mlvxyt3dkiylkj	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00mmvxytytx5kz8p	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00mnvxyt9o317rms	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00movxytysmrxp9p	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mpvxytbuvmgnp9	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mqvxytd8f5dtld	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mrvxytphpkeuhf	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00msvxyta0v2l3o9	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mtvxyt8j00y1cp	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00muvxytwh9dm9gm	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mvvxyt6g7ymhj1	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00mwvxyt4u39porb	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00mxvxytsxpy8nwz	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00myvxyt3srl0dox	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00mzvxytnpne1kkr	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n0vxyt445a76nm	ACCEPTED	clxyzm17l00ilvxyt8k9fak8y	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n1vxytcuaru7da	ACCEPTED	clxyzm17t00ipvxytohxs43nb	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n2vxytlb439uev	PENDING	clxyzm17t00ipvxytohxs43nb	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00n3vxyt02c2s8f7	PENDING	clxyzm17t00ipvxytohxs43nb	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00n4vxytl2mqde77	ACCEPTED	clxyzm18100itvxytbnxjb5bm	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n5vxyt69c27f5e	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n6vxyt1k9b4rn2	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n7vxytqmx68fuq	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00n8vxytr46hszft	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00n9vxyt9yt7p8i8	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00navxyt3mr379e3	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00nbvxytthufcuq2	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00ncvxyt7cumosno	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00ndvxyt7h67evf3	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00nevxyt3fnwow7w	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00nfvxytykywb7bs	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00ngvxytvfg7gqiy	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00nhvxytjm5rwjqf	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00nivxytq0mmi35l	REJECTED	clxyzm18100itvxytbnxjb5bm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00njvxytyehjnu7s	ACCEPTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00nkvxytvrbxszwz	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00nlvxytru18waeh	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gw00nmvxytg0ptjco9	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00nnvxyta6j8ucbs	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gw00novxyt439vbat2	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00npvxyt2ao1mg99	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nqvxytoflyb9xy	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00nrvxytidoqs1r5	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nsvxytbiqlm9hw	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ntvxyt6ryxp8jx	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00nuvxytl8df1xfe	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nvvxytmdihc1hs	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nwvxythycku7ap	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nxvxyteq1a8gky	REJECTED	clxyzm18900ixvxyt4bjkpf5g	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nyvxytev6mw1kt	ACCEPTED	clxyzm18i00j1vxytdwlmgb1r	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00nzvxyta810mtvp	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00o0vxyt68t3glz0	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00o1vxyt1nk6nlfr	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00o2vxytvno8goss	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00o3vxyt3o0nylhb	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00o4vxytrh0muyjv	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00o5vxytdd2fcjw4	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00o6vxytpkgl2yem	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00o7vxyt1vnlt5t4	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00o8vxytldbu1tbs	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00o9vxyt12aqfn4u	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00oavxyt3xzbrecv	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00obvxyti6gky5zp	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00ocvxytsh3vfhss	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00odvxytm5yttxez	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00oevxytb1gydzfu	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ofvxytcz4kjizn	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00ogvxyt7c2c9a8m	PENDING	clxyzm18i00j1vxytdwlmgb1r	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ohvxytgthu4ei2	ACCEPTED	clxyzm18t00j5vxytsfyntlx2	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00oivxytku5g80nm	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00ojvxytv3u4i0np	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00okvxytxj4j5kz4	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00olvxytu38qf3vi	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00omvxytbjx74wa3	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00onvxytf827h551	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00oovxytlpccmel5	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00opvxyt47397053	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00oqvxyt0ara71qc	PENDING	clxyzm18t00j5vxytsfyntlx2	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00orvxytusabp3am	ACCEPTED	clxyzm19600j9vxytn2vhxwvb	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00osvxytmoul7ko8	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00otvxytj785m9dv	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ouvxytj0k0utey	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ovvxyt22poquv2	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00owvxytrcjrbg1d	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00oxvxytc86ut5l3	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00oyvxytyq3mvrsa	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ozvxyt26k7ry9g	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p0vxyt9ijjut3r	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p1vxytrvf1gnxs	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00p2vxytmckjl8gj	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p3vxyt3g690iz0	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p4vxytz7jwqvmw	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p5vxyte2zoes3j	PENDING	clxyzm19600j9vxytn2vhxwvb	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p6vxyttjz1o47p	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p7vxyt5dv8qf4y	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p8vxytll34s967	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00p9vxytrg3c77k1	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pavxytda7o8wdx	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pbvxytjr884y51	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pcvxytg56ap222	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pdvxytcwouc0ph	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pevxytrsn4ch6q	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pfvxytojfcjs6s	ACCEPTED	clxyzm19g00jdvxytp5un25iu	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pgvxytyvwtlc8c	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00phvxytkwhevq7b	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pivxytsv0hegkb	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pjvxytal674495	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pkvxyt58bbpz5f	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00plvxyt9h1533sr	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pmvxytwwg89d9p	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pnvxytklqlsrhu	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00povxyti5gptmx8	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00ppvxytorlo4o58	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pqvxyt3wtil5ia	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00prvxytd2vo38kj	ACCEPTED	clxyzm19t00jhvxytyuemro8o	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00psvxytt2lm6xz8	ACCEPTED	clxyzm1a300jlvxytn37finp1	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00ptvxytmhyhvxrm	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00puvxytcrg6b5qi	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pvvxytwa8gejvy	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pwvxyt2vqhvhdt	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pxvxyty82ywkbk	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00pyvxyt4fbde4jh	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00pzvxyt1ik5tvyp	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00q0vxytfs9a5x9t	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00q1vxytbfnbk27g	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00q2vxyt0f58gwbb	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00q3vxytzf4g32mt	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gx00q4vxyt753leant	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gx00q5vxytvnw1421w	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00q6vxytbyey91cc	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00q7vxytxpvuorj1	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00q8vxytjx2bf299	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00q9vxytzq9h41vk	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qavxytrpua1ttp	PENDING	clxyzm1a300jlvxytn37finp1	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qbvxyto0w0j5te	ACCEPTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qcvxytq7on6l2g	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qdvxyt0ez4gin9	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qevxytxujho6n4	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qfvxyt6jorm8ip	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qgvxytuxaq025j	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qhvxytfr3eelb0	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qivxytnozmx6dc	REJECTED	clxyzm1ad00jpvxytp10hyo1b	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qjvxyt661luw9s	ACCEPTED	clxyzm1an00jtvxytj50zdtdm	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qkvxytqxe7c8w5	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qlvxytp7aqp0p2	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qmvxyti1fu81ov	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qnvxyti1em8gwz	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qovxyt60zlho8r	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qpvxytsml2enui	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qqvxytm1c4bi36	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qrvxytl1igbo1z	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qsvxyt0shusb3q	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qtvxytwkj3ur5y	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00quvxyt4igrnd9f	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qvvxyt234osvdz	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qwvxytmruh27z2	REJECTED	clxyzm1an00jtvxytj50zdtdm	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00qxvxytvb4xt7k5	ACCEPTED	clxyzm1b100jxvxytjjozs8iw	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qyvxyteejzt8qs	REJECTED	clxyzm1b100jxvxytjjozs8iw	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00qzvxytd3nrpvxa	REJECTED	clxyzm1b100jxvxytjjozs8iw	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00r0vxytvrafwsdw	REJECTED	clxyzm1b100jxvxytjjozs8iw	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00r1vxyt6v2zahgd	REJECTED	clxyzm1b100jxvxytjjozs8iw	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00r2vxytwv9vewro	REJECTED	clxyzm1b100jxvxytjjozs8iw	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00r3vxytrjdxijeu	ACCEPTED	clxyzm1bc00k1vxythwp6bqzv	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00r4vxyt7007rxcm	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00r5vxyt2gbbwb1t	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00r6vxytt7bcz6vj	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00r7vxytx7i66f8v	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00r8vxytbdqi1f1w	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00r9vxytqmksdnq5	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00ravxytbag6vzvs	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00rbvxyt2wc853i2	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00rcvxytdtnqqfxd	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00rdvxytdryi5zf4	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gy00revxytvl4hsx6l	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00rfvxyt84dqrysg	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00rgvxytl0fiq4uf	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gy00rhvxytynrpbmud	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00rivxyte46fdnnt	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rjvxyt6h3xey09	PENDING	clxyzm1bc00k1vxythwp6bqzv	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rkvxyt0vssax6i	ACCEPTED	clxyzm1bn00k5vxytrvk1em0c	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rlvxyt4022mzy8	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rmvxythq34r9kg	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00rnvxyt4qfvk46z	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rovxyt2135p8g1	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rpvxyt0l8e0kxd	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00rqvxyta6hu2c62	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00rrvxyte90ube5o	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rsvxytea2huzo5	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00rtvxytivnfxjlx	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00ruvxytxdm7ezbe	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rvvxytpj73mycf	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rwvxyty1fxr0ki	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00rxvxytuk0uz3pl	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00ryvxyt0jhuc6oc	PENDING	clxyzm1bn00k5vxytrvk1em0c	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00rzvxytdgzpg1io	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s0vxytzddxh6v1	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00s1vxyto3zxrpgn	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s2vxyt8uf9dacb	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s3vxyt0t28gqht	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00s4vxytlri8skfs	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s5vxytyajdmet6	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00s6vxytv6yh2jml	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s7vxytjr2oqeki	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s8vxytixgxer5b	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00s9vxyt6254pesc	ACCEPTED	clxyzm1bx00k9vxytf5ztgmch	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00savxytf9qsiga5	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00sbvxytmlse8xxa	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00scvxytgxxkt62p	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00sdvxytn3kjtkm8	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00sevxytaeg1n0t2	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00sfvxytnwin3rw8	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00sgvxytyz05iouy	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00shvxytretfo2hu	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00sivxyt2esmghhn	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00sjvxyteme7el29	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00skvxytkcfb3bnm	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00slvxyt2mstknfh	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00smvxyty40o9k1n	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00snvxytjije1yxj	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00sovxytiv3z9kz6	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00spvxytccdwfg1n	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00sqvxyt0h5uwtc5	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00srvxyt4iwzdfio	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1gz00ssvxytyzp12ge9	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00stvxyt17b82yi9	ACCEPTED	clxyzm1c500kdvxyt2oj431y3	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1gz00suvxytp6t5hfal	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000svvxytar4pyqzo	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000swvxytuo952giz	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000sxvxytd1hagbnz	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000syvxytzb264l6f	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000szvxytl25s52mn	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000t0vxytvd17atxa	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t1vxytu8om1oiw	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000t2vxyt0zs9kwrw	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000t3vxyt3p5lnhfd	ACCEPTED	clxyzm1ce00khvxytas5nlo30	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t4vxyt7q42ttib	ACCEPTED	clxyzm1cm00klvxytbju084d0	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t5vxytiyero8ll	ACCEPTED	clxyzm1cm00klvxytbju084d0	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t6vxyt9mpcbc7e	ACCEPTED	clxyzm1cm00klvxytbju084d0	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t7vxytvqergypm	ACCEPTED	clxyzm1cm00klvxytbju084d0	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t8vxytafxveuek	ACCEPTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000t9vxyt5dip6mzu	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tavxytksg74mvj	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tbvxytzg7cp9i6	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tcvxyt44bv4058	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tdvxytdxxgylse	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tevxyt48tfspr7	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tfvxytx90594c5	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tgvxytf2yhfbp2	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000thvxytueeqxmmp	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tivxytifvios0t	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tjvxytm3mcw86y	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tkvxyt5p6hjruj	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tlvxytxicoiunj	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tmvxytg3lb2xhs	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tnvxyt456ddzgd	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tovxyt6vhawnf7	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tpvxytagel2m6t	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tqvxytyvtchybk	REJECTED	clxyzm1cu00kpvxytmau1mbxt	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000trvxytx4rv46d4	ACCEPTED	clxyzm1d100ktvxytetp8thye	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tsvxyttsz0508j	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000ttvxyt0hbxru32	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tuvxytz88cibw1	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tvvxytb8yf7sub	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000twvxyt41ll0oqs	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000txvxytyfu23kyw	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000tyvxytrocfxuuz	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000tzvxytp1hytipu	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000u0vxytj6knuplr	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000u1vxyt20ru6d17	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000u2vxytlkvsf16i	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000u3vxytlmw06bt0	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000u4vxytkgk210w0	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000u5vxytvbejkijl	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000u6vxytfn6k8pwo	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000u7vxyt3dct8l11	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h000u8vxytcyjpro1f	REJECTED	clxyzm1d100ktvxytetp8thye	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000u9vxyt9gehanh2	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h000uavxyta60prpyb	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100ubvxytrst4kwlu	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100ucvxytcjjmjr13	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100udvxytvyk1h82b	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uevxytn45dbjjx	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100ufvxyt3839ey4j	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100ugvxytwfs5bv0l	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100uhvxytjjs14xyi	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uivxyt2pbdyvk5	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100ujvxyto9oy5fqq	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100ukvxyt8tmwcbi2	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100ulvxyt9irg2ehm	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100umvxytoxj2eel5	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100unvxytgvx228gm	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uovxyttdmh9zqm	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100upvxytqqt9vmf9	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100uqvxyt00ntcpoh	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100urvxytzzxssozg	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100usvxytwgj753ob	ACCEPTED	clxyzm1da00kxvxyt5yxsg1i0	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100utvxytqzl3sw9k	ACCEPTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uuvxytjr7ezgpv	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uvvxytpldxvy85	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uwvxytscykvbij	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100uxvxytu4l8newi	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100uyvxytwxrbgynu	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100uzvxytbmtgs265	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100v0vxyt7jnwmly2	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100v1vxytseikfzq3	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100v2vxyto2hd6fji	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100v3vxytmkxovfnx	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100v4vxytg6ilvasz	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100v5vxytjq2c36gu	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100v6vxytmx9pix48	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100v7vxytip1ugemf	REJECTED	clxyzm1dh00l1vxythyt2r4k8	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100v8vxytb30q8sq6	ACCEPTED	clxyzm1dq00l5vxyt246v7476	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100v9vxyt2awc2d3o	ACCEPTED	clxyzm1dq00l5vxyt246v7476	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vavxytvkubxmye	ACCEPTED	clxyzm1dq00l5vxyt246v7476	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vbvxythiqtsr9p	ACCEPTED	clxyzm1dq00l5vxyt246v7476	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vcvxytchp3dmds	ACCEPTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vdvxytvmj5pvn5	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100vevxytzaiewz0t	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vfvxythzyrawhf	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100vgvxytmoqgcs0v	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vhvxytyrzc6wpm	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vivxytkwwer0th	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vjvxyta2s18724	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h100vkvxyt63d1wvqd	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h100vlvxytvw8tef9c	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vmvxyt77g7g1og	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vnvxytiz6xoc21	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200vovxytxkndlzwa	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vpvxyt4bqgdxzh	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200vqvxyt5byitszs	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vrvxytu2qhdrp4	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200vsvxyt3qd6j90p	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vtvxyt5h7y6dok	REJECTED	clxyzm1dx00l9vxyt8h1njd12	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vuvxyte7pbkiky	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vvvxytzmnzfzd8	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vwvxytksutee0e	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200vxvxytxga7dc0h	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200vyvxyt8295iejf	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200vzvxytwqrq9zh7	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w0vxytqzcyvfs6	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w1vxyttqwa44m4	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w2vxyt6gk9i7z6	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w3vxytsgulqujj	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w4vxytdtvemm3y	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w5vxytcdj4wc6o	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200w6vxytu3yuhsx2	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200w7vxytlzz33gzr	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w8vxytdu3ov99o	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200w9vxytiw9culnn	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wavxytvdeirnmq	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wbvxytkhazpkyx	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wcvxyt6w88o5os	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wdvxytmuwkwfpp	ACCEPTED	clxyzm1ea00ldvxytaohqtznr	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wevxyt8kzs6gdu	ACCEPTED	clxyzm1ej00lhvxyt1nk5vme7	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wfvxytuu7db7w4	PENDING	clxyzm1ej00lhvxyt1nk5vme7	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wgvxyt615k4qfa	PENDING	clxyzm1ej00lhvxyt1nk5vme7	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200whvxytm13uiefn	PENDING	clxyzm1ej00lhvxyt1nk5vme7	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wivxyt38lm2qz1	PENDING	clxyzm1ej00lhvxyt1nk5vme7	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wjvxyt79u0dmh6	PENDING	clxyzm1ej00lhvxyt1nk5vme7	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wkvxytcg7p53ja	PENDING	clxyzm1ej00lhvxyt1nk5vme7	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wlvxytns509pvv	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wmvxytufe082lq	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wnvxytg40ef3ic	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wovxytpqadfsna	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wpvxytcf5r46rn	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wqvxytubs9sykp	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wrvxytb8sij1ko	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wsvxytsvoxf4b7	ACCEPTED	clxyzm1er00llvxytctcj2t6x	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wtvxyt4c4npfth	ACCEPTED	clxyzm1f000lpvxytu7f23rwa	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wuvxytw8dwu8qd	REJECTED	clxyzm1f000lpvxytu7f23rwa	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h200wvvxytkkb5jiwi	REJECTED	clxyzm1f000lpvxytu7f23rwa	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h200wwvxytwcypofhm	REJECTED	clxyzm1f000lpvxytu7f23rwa	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h300wxvxytf8eaomuo	REJECTED	clxyzm1f000lpvxytu7f23rwa	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzm1h300wyvxytnm7exfou	REJECTED	clxyzm1f000lpvxytu7f23rwa	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	COMPANY
clxyzm1h300wzvxyt56riby1j	REJECTED	clxyzm1f000lpvxytu7f23rwa	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:47.981	2024-06-28 17:48:47.981	PERSON
clxyzmdg401i9vxytc8uc0dcw	PENDING	clxyzmdfv01i6vxyt5q0brwd5	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:49:03.508	2024-06-28 17:49:03.508	PERSON
clxyzmdg901idvxytb2f30iql	PENDING	clxyzmdfv01i6vxyt5q0brwd5	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:49:03.514	2024-06-28 17:49:03.514	PERSON
clxyzmdgd01ihvxythpyv1npd	PENDING	clxyzmdfv01i6vxyt5q0brwd5	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:49:03.517	2024-06-28 17:49:03.517	PERSON
\.


--
-- Data for Name: Log; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Log" (id, status, "authUserId", "createdAt", action, model) FROM stdin;
clxyzomr70001vxfr8hne86ec	Success	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:48.883	Iniciar sesión	Login
clxyzomvk0001vx3sl0g4vvvi	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:49.041	Ingresó a la vista	Home
clxyzon6d0003vx3sx4r961tl	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:49.429	Ingresó a la vista	Home
clxyzoni50005vx3s7j8yd7tp	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:49.853	Ingresó a la vista	Home
clxyzoocg0007vx3s2bju93l3	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:50.945	Ingresó a la vista	Stats
clxyzooev0009vx3sc85w93lp	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:51.03	Ingresó a la vista	Verify
clxyzop23000bvx3s02dgb7gp	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:51.867	Ingresó a la vista	Backup
clxyzop2k0001vx58cno6be11	Info	4Q0hIfKdE6Ei7OI	2024-06-28 17:50:51.884	Ingresó a la vista	Log
\.


--
-- Data for Name: Membership; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Membership" (id, "personId", "createdAt", "updatedAt", "teamId", "invitationId") FROM stdin;
clxyzm1ns00ytvxytx5fnu3g3	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm16x00idvxytxr6o7dpp	clxyzm1gw00m8vxytxs050o3m
clxyzm1ns00yuvxytsl4q3yj2	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm16x00idvxytxr6o7dpp	clxyzm1gw00m9vxyt11wb8fem
clxyzm1ns00yvvxyta7ddu0t1	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm16x00idvxytxr6o7dpp	clxyzm1gw00mavxyti7wy5rne
clxyzm1ns00ywvxytrmbc6jnp	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mbvxytpheoonxf
clxyzm1ns00yxvxytkwz6y2ij	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mcvxyto7tb7z89
clxyzm1ns00yyvxytva8f56rk	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mdvxyt0c53fwn6
clxyzm1ns00yzvxytthr7l3oy	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mevxytb223f0s3
clxyzm1ns00z0vxytxqtaz2bf	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mfvxytaylp5gy0
clxyzm1ns00z1vxyt4tw6kuo5	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mgvxytcbd8yiu5
clxyzm1ns00z2vxyt9x15783y	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mhvxytjhr6m9qp
clxyzm1ns00z3vxytutn3uonq	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mivxyter0xrj33
clxyzm1ns00z4vxytmthi420c	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mjvxyt3li58nap
clxyzm1ns00z5vxytyqen2xkd	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17b00ihvxytzqegtjtm	clxyzm1gw00mkvxyt7mmzgr84
clxyzm1ns00z6vxytjne2a87x	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mlvxyt3dkiylkj
clxyzm1ns00z7vxyt6dbxzew3	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mmvxytytx5kz8p
clxyzm1ns00z8vxytyxg1j48t	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mnvxyt9o317rms
clxyzm1ns00z9vxytckyki98m	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00movxytysmrxp9p
clxyzm1ns00zavxyty9we4tte	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mpvxytbuvmgnp9
clxyzm1ns00zbvxytqlb3gty7	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mqvxytd8f5dtld
clxyzm1ns00zcvxytg505fzpk	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mrvxytphpkeuhf
clxyzm1ns00zdvxytolacb6r8	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00msvxyta0v2l3o9
clxyzm1ns00zevxyt9rhlrtvk	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mtvxyt8j00y1cp
clxyzm1ns00zfvxytgp80ddm7	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00muvxytwh9dm9gm
clxyzm1ns00zgvxyt96lp2qtb	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mvvxyt6g7ymhj1
clxyzm1ns00zhvxytbut9jvlg	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mwvxyt4u39porb
clxyzm1ns00zivxytufttomgw	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mxvxytsxpy8nwz
clxyzm1ns00zjvxyt0h8xytw2	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00myvxyt3srl0dox
clxyzm1ns00zkvxyt359fwf2q	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00mzvxytnpne1kkr
clxyzm1ns00zlvxytck102ppj	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17l00ilvxyt8k9fak8y	clxyzm1gw00n0vxyt445a76nm
clxyzm1ns00zmvxytfyvprwlu	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm17t00ipvxytohxs43nb	clxyzm1gw00n1vxytcuaru7da
clxyzm1ns00znvxytp7thfizl	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm18100itvxytbnxjb5bm	clxyzm1gw00n4vxytl2mqde77
clxyzm1ns00zovxytydt5axw8	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm18900ixvxyt4bjkpf5g	clxyzm1gw00njvxytyehjnu7s
clxyzm1ns00zpvxytmtev618n	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm18i00j1vxytdwlmgb1r	clxyzm1gx00nyvxytev6mw1kt
clxyzm1ns00zqvxytgax13jqn	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm18t00j5vxytsfyntlx2	clxyzm1gx00ohvxytgthu4ei2
clxyzm1ns00zrvxyto7zwr21y	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19600j9vxytn2vhxwvb	clxyzm1gx00orvxytusabp3am
clxyzm1nt00zsvxytoucahch3	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00p6vxyttjz1o47p
clxyzm1nt00ztvxytiio7ofew	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00p7vxyt5dv8qf4y
clxyzm1nt00zuvxytuzt340ai	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00p8vxytll34s967
clxyzm1nt00zvvxytriflag8f	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00p9vxytrg3c77k1
clxyzm1nt00zwvxytafjyjl31	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00pavxytda7o8wdx
clxyzm1nt00zxvxytpeqh4wr9	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00pbvxytjr884y51
clxyzm1nt00zyvxytzcxjx6nb	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00pcvxytg56ap222
clxyzm1nt00zzvxytm0yi7kgw	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00pdvxytcwouc0ph
clxyzm1nt0100vxytaj6e10fx	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00pevxytrsn4ch6q
clxyzm1nt0101vxytylhp8hfu	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19g00jdvxytp5un25iu	clxyzm1gx00pfvxytojfcjs6s
clxyzm1nt0102vxyt8b7eto94	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pgvxytyvwtlc8c
clxyzm1nt0103vxyt1lmog8e2	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00phvxytkwhevq7b
clxyzm1nt0104vxytmjo6y5al	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pivxytsv0hegkb
clxyzm1nt0105vxytjqkebrs3	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pjvxytal674495
clxyzm1nt0106vxythmqdd28n	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pkvxyt58bbpz5f
clxyzm1nt0107vxytmhf1z15p	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00plvxyt9h1533sr
clxyzm1nt0108vxyt9xwwadvx	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pmvxytwwg89d9p
clxyzm1nt0109vxytwj2wqxgn	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pnvxytklqlsrhu
clxyzm1nt010avxyt6b15rcef	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00povxyti5gptmx8
clxyzm1nt010bvxyttxc1kac4	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00ppvxytorlo4o58
clxyzm1nt010cvxytm37z54ab	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00pqvxyt3wtil5ia
clxyzm1nt010dvxyt8g2ybeie	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm19t00jhvxytyuemro8o	clxyzm1gx00prvxytd2vo38kj
clxyzm1nt010evxytaul4ginn	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1a300jlvxytn37finp1	clxyzm1gx00psvxytt2lm6xz8
clxyzm1nt010fvxyter0c9ab0	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ad00jpvxytp10hyo1b	clxyzm1gy00qbvxyto0w0j5te
clxyzm1nt010gvxyt41ksd9pc	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1an00jtvxytj50zdtdm	clxyzm1gy00qjvxyt661luw9s
clxyzm1nt010hvxytjq0cjjiz	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1b100jxvxytjjozs8iw	clxyzm1gy00qxvxytvb4xt7k5
clxyzm1nt010ivxytuyyuuw3x	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bc00k1vxythwp6bqzv	clxyzm1gy00r3vxytrjdxijeu
clxyzm1nt010jvxytgbuedjhp	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bn00k5vxytrvk1em0c	clxyzm1gz00rkvxyt0vssax6i
clxyzm1nt010kvxytftfd17h3	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00rzvxytdgzpg1io
clxyzm1nt010lvxytj8632asq	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s0vxytzddxh6v1
clxyzm1nt010mvxyt8087g6ga	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s1vxyto3zxrpgn
clxyzm1nt010nvxytbalixdge	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s2vxyt8uf9dacb
clxyzm1nt010ovxyta4c4bdza	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s3vxyt0t28gqht
clxyzm1nt010pvxyt1oawt0vn	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s4vxytlri8skfs
clxyzm1nt010qvxytijbl3zsl	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s5vxytyajdmet6
clxyzm1nt010rvxytx8vqdk8q	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s6vxytv6yh2jml
clxyzm1nt010svxytcfo7f4rb	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s7vxytjr2oqeki
clxyzm1nt010tvxytyk59dvhk	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s8vxytixgxer5b
clxyzm1nt010uvxytbt9sju9y	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1bx00k9vxytf5ztgmch	clxyzm1gz00s9vxyt6254pesc
clxyzm1nt010vvxytpesacb0c	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00savxytf9qsiga5
clxyzm1nt010wvxytcclg1lhv	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sbvxytmlse8xxa
clxyzm1nt010xvxytkc7rr11q	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00scvxytgxxkt62p
clxyzm1nt010yvxyt13mcp2sk	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sdvxytn3kjtkm8
clxyzm1nt010zvxytdfh4fje7	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sevxytaeg1n0t2
clxyzm1nt0110vxytbtgzconn	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sfvxytnwin3rw8
clxyzm1nt0111vxythligr426	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sgvxytyz05iouy
clxyzm1nt0112vxytb81z4l5g	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00shvxytretfo2hu
clxyzm1nt0113vxyt12ru9xjq	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sivxyt2esmghhn
clxyzm1nt0114vxytyd8cjwzv	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sjvxyteme7el29
clxyzm1nt0115vxyt1u2yi81h	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00skvxytkcfb3bnm
clxyzm1nt0116vxytwfbwuj4j	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00slvxyt2mstknfh
clxyzm1nt0117vxyt8z2qbi42	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00smvxyty40o9k1n
clxyzm1nt0118vxytqh6c3v8w	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00snvxytjije1yxj
clxyzm1nt0119vxytveens26u	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sovxytiv3z9kz6
clxyzm1nt011avxyt1c4avvgi	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00spvxytccdwfg1n
clxyzm1nt011bvxytuzrdh8nz	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00sqvxyt0h5uwtc5
clxyzm1nt011cvxytcddcn7k0	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00srvxyt4iwzdfio
clxyzm1nt011dvxyttzi0eg1u	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00ssvxytyzp12ge9
clxyzm1nt011evxytplzd5hyb	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1c500kdvxyt2oj431y3	clxyzm1gz00stvxyt17b82yi9
clxyzm1nt011fvxytmwc421xp	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1gz00suvxytp6t5hfal
clxyzm1nt011gvxytvkcu8nh5	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000svvxytar4pyqzo
clxyzm1nt011hvxytsgqokx6j	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000swvxytuo952giz
clxyzm1nt011ivxythhtx3ihd	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000sxvxytd1hagbnz
clxyzm1nt011jvxyt6f6ptwfm	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000syvxytzb264l6f
clxyzm1nt011kvxytwultzj6a	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000szvxytl25s52mn
clxyzm1nt011lvxyt89j4yfuy	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000t0vxytvd17atxa
clxyzm1nt011mvxyt5hr0gcf1	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000t1vxytu8om1oiw
clxyzm1nt011nvxytf0qede4e	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000t2vxyt0zs9kwrw
clxyzm1nt011ovxyt4bfuw8u3	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ce00khvxytas5nlo30	clxyzm1h000t3vxyt3p5lnhfd
clxyzm1nt011pvxytjpchoqt1	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1cm00klvxytbju084d0	clxyzm1h000t4vxyt7q42ttib
clxyzm1nt011qvxyt9339svne	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1cm00klvxytbju084d0	clxyzm1h000t5vxytiyero8ll
clxyzm1nt011rvxytlvel1vmp	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1cm00klvxytbju084d0	clxyzm1h000t6vxyt9mpcbc7e
clxyzm1nt011svxyt2oz8t5a4	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1cm00klvxytbju084d0	clxyzm1h000t7vxytvqergypm
clxyzm1nt011tvxyt0z2x873s	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1cu00kpvxytmau1mbxt	clxyzm1h000t8vxytafxveuek
clxyzm1nt011uvxytnk2vpvd4	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1d100ktvxytetp8thye	clxyzm1h000trvxytx4rv46d4
clxyzm1nt011vvxytgq2sbh5z	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h000u9vxyt9gehanh2
clxyzm1nt011wvxyt5nmvalc1	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h000uavxyta60prpyb
clxyzm1nt011xvxytpthbftr5	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ubvxytrst4kwlu
clxyzm1nt011yvxyti5zkgua1	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ucvxytcjjmjr13
clxyzm1nt011zvxytbhb1eeqr	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100udvxytvyk1h82b
clxyzm1nt0120vxyt9fntm7ww	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100uevxytn45dbjjx
clxyzm1nt0121vxyt233ykxes	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ufvxyt3839ey4j
clxyzm1nt0122vxytasm8t7pq	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ugvxytwfs5bv0l
clxyzm1nt0123vxyti38fxg36	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100uhvxytjjs14xyi
clxyzm1nt0124vxyt95jof66n	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100uivxyt2pbdyvk5
clxyzm1nt0125vxytf6ygy3ra	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ujvxyto9oy5fqq
clxyzm1nt0126vxyt04y4uugw	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ukvxyt8tmwcbi2
clxyzm1nt0127vxyt7ejtpn3r	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100ulvxyt9irg2ehm
clxyzm1nt0128vxyte3m7gfoz	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100umvxytoxj2eel5
clxyzm1nt0129vxytzgqktm2c	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100unvxytgvx228gm
clxyzm1nt012avxytw066wbuo	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100uovxyttdmh9zqm
clxyzm1nt012bvxytsm7gf9vn	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100upvxytqqt9vmf9
clxyzm1nt012cvxytgp5gaofj	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100uqvxyt00ntcpoh
clxyzm1nu012dvxytpya0wurp	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100urvxytzzxssozg
clxyzm1nu012evxyth69xio7f	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1da00kxvxyt5yxsg1i0	clxyzm1h100usvxytwgj753ob
clxyzm1nu012fvxytz180gao5	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1dh00l1vxythyt2r4k8	clxyzm1h100utvxytqzl3sw9k
clxyzm1nu012gvxytqrsvdsbh	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1dq00l5vxyt246v7476	clxyzm1h100v8vxytb30q8sq6
clxyzm1nu012hvxytv54140th	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1dq00l5vxyt246v7476	clxyzm1h100v9vxyt2awc2d3o
clxyzm1nu012ivxytu95ut2la	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1dq00l5vxyt246v7476	clxyzm1h100vavxytvkubxmye
clxyzm1nu012jvxytwoqyt2go	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1dq00l5vxyt246v7476	clxyzm1h100vbvxythiqtsr9p
clxyzm1nu012kvxytmgwoavlv	clxyzlqca00dgvxytmb72d25h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1dx00l9vxyt8h1njd12	clxyzm1h100vcvxytchp3dmds
clxyzm1nu012lvxyt2wzdc9nu	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200vuvxyte7pbkiky
clxyzm1nu012mvxytmhjtlnmg	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200vvvxytzmnzfzd8
clxyzm1nu012nvxytisbpb1ee	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200vwvxytksutee0e
clxyzm1nu012ovxytpktv6xg6	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200vxvxytxga7dc0h
clxyzm1nu012pvxytu6sti10d	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200vyvxyt8295iejf
clxyzm1nu012qvxyt4f1q2qan	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200vzvxytwqrq9zh7
clxyzm1nu012rvxytjaxhjpk3	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w0vxytqzcyvfs6
clxyzm1nu012svxytozh5n9on	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w1vxyttqwa44m4
clxyzm1nu012tvxyt36itu43z	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w2vxyt6gk9i7z6
clxyzm1nu012uvxyt168vq9w6	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w3vxytsgulqujj
clxyzm1nu012vvxytcpfbdc9g	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w4vxytdtvemm3y
clxyzm1nu012wvxyt1b734b0s	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w5vxytcdj4wc6o
clxyzm1nu012xvxytd3dygt4c	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w6vxytu3yuhsx2
clxyzm1nu012yvxytaj09fs91	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w7vxytlzz33gzr
clxyzm1nu012zvxythj7qihye	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w8vxytdu3ov99o
clxyzm1nu0130vxyt0t3rs4st	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200w9vxytiw9culnn
clxyzm1nu0131vxyt0edkysyu	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200wavxytvdeirnmq
clxyzm1nu0132vxyt7svfr84f	clxyzlrho00djvxytzqntoe14	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200wbvxytkhazpkyx
clxyzm1nu0133vxytbnknlksy	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200wcvxyt6w88o5os
clxyzm1nu0134vxytq01illxi	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ea00ldvxytaohqtznr	clxyzm1h200wdvxytmuwkwfpp
clxyzm1nu0135vxytl8wzqd4v	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1ej00lhvxyt1nk5vme7	clxyzm1h200wevxyt8kzs6gdu
clxyzm1nu0136vxytqm79jbfs	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wlvxytns509pvv
clxyzm1nu0137vxyt519oai5y	clxyzlq0n00dfvxytllyse2tw	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wmvxytufe082lq
clxyzm1nu0138vxyt5uji3xlo	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wnvxytg40ef3ic
clxyzm1nu0139vxytku0wuxtc	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wovxytpqadfsna
clxyzm1nu013avxyt4paw1d3n	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wpvxytcf5r46rn
clxyzm1nu013bvxyt8z13h0d9	clxyzlojl00davxyti8hlue08	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wqvxytubs9sykp
clxyzm1nu013cvxyteqek0ncu	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wrvxytb8sij1ko
clxyzm1nu013dvxytpwvk67t4	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1er00llvxytctcj2t6x	clxyzm1h200wsvxytsvoxf4b7
clxyzm1nu013evxytaa2mlfz3	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:48:48.232	clxyzm1f000lpvxytu7f23rwa	clxyzm1h200wtvxyt4c4npfth
clxyzmdg401ibvxyt4j1szlwk	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:49:03.508	2024-06-28 17:49:03.508	clxyzmdfv01i6vxyt5q0brwd5	clxyzmdg401i9vxytc8uc0dcw
clxyzmdg901ifvxyt14kbf8hw	clxyzlpe100ddvxytbq5xl57h	2024-06-28 17:49:03.514	2024-06-28 17:49:03.514	clxyzmdfv01i6vxyt5q0brwd5	clxyzmdg901idvxytb2f30iql
clxyzmdgd01ijvxytln1jp5xw	clxyzlpqe00devxyt9kk8uhnc	2024-06-28 17:49:03.517	2024-06-28 17:49:03.517	clxyzmdfv01i6vxyt5q0brwd5	clxyzmdgd01ihvxythpyv1npd
clxyzm1ns00yovxyt7jl5nahe	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:49:03.523	clxyzmdfv01i6vxyt5q0brwd5	clxyzm1gw00lqvxyt7qeh46ae
clxyzm1ns00ypvxytvfkvcujg	clxyzlr2900divxyt2lq0s5q5	2024-06-28 17:48:48.232	2024-06-28 17:49:03.523	clxyzmdfv01i6vxyt5q0brwd5	clxyzm1gw00m4vxyt3usjn4g2
clxyzm1ns00yqvxytsfvhxpuq	clxyzlqop00dhvxyt9acxjypl	2024-06-28 17:48:48.232	2024-06-28 17:49:03.523	clxyzmdfv01i6vxyt5q0brwd5	clxyzm1gw00m5vxyt4iv6mcas
clxyzm1ns00yrvxyt7bwv7txj	clxyzlos600dbvxytk7ukhabx	2024-06-28 17:48:48.232	2024-06-28 17:49:03.523	clxyzmdfv01i6vxyt5q0brwd5	clxyzm1gw00m6vxyt2zvm137g
clxyzm1ns00ysvxyte53em7zc	clxyzlp2e00dcvxytkej59ozk	2024-06-28 17:48:48.232	2024-06-28 17:49:03.523	clxyzmdfv01i6vxyt5q0brwd5	clxyzm1gw00m7vxyt9l4okcf8
\.


--
-- Data for Name: Task; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Task" (id, title, description, status, "projectId", "createdAt", "updatedAt", "personId") FROM stdin;
clxyzm1p3013fvxyts697hkqf	Crear un blog de viajes y aventuras.	Crea un blog de viajes y aventuras donde compartas tus experiencias y consejos para viajar.	DONE	clxyzm1ie00x1vxytp6ybtfoe	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p3013gvxytv5way40q	Realizar un análisis de la cadena de suministro sostenible	Realizar un análisis de la cadena de suministro sostenible para evaluar cómo el proyecto puede ser más sostenible.	PROGRESS	clxyzm1ie00x1vxytp6ybtfoe	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p3013hvxytjacq9y7e	Desarrollar un juego educativo para niños.	Desarrolla un juego educativo para niños que les enseñe habilidades como la lectura, la escritura o las matemáticas.	REVIEW	clxyzm1ie00x1vxytp6ybtfoe	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p3013ivxytus48sf70	Realizar un análisis de la cadena de suministro	Realizar un análisis de la cadena de suministro para identificar los proveedores y los procesos necesarios para llevar a cabo el proyecto.	REVIEW	clxyzm1ie00x1vxytp6ybtfoe	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p3013jvxyt3nn9xac9	Realizar un análisis de rentabilidad	Realizar un análisis de rentabilidad para evaluar si el proyecto generará beneficios suficientes para justificar la inversión.	PROGRESS	clxyzm1ie00x1vxytp6ybtfoe	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p3013kvxytj78408j8	Desarrollar una plataforma de crowdfunding para proyectos sociales.	Desarrolla una plataforma de crowdfunding para proyectos sociales que permita a las personas apoyar causas que les importan.	PROGRESS	clxyzm1im00x3vxyt22ngu580	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p3013lvxytuq7hwkuv	Crear un canal de YouTube de comedia.	Crea un canal de YouTube de comedia donde puedas compartir tus sketches y parodias.	DONE	clxyzm1im00x3vxyt22ngu580	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p3013mvxytsfdpd1oa	Realizar un análisis de rentabilidad social	Realizar un análisis de rentabilidad social para evaluar si el proyecto generará beneficios sociales suficientes para justificar la inversión.	PROGRESS	clxyzm1im00x3vxyt22ngu580	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p3013nvxyty253w44b	Establecer un plan de gestión de riesgos	Establecer un plan de gestión de riesgos para identificar y manejar los riesgos asociados con el proyecto.	DONE	clxyzm1im00x3vxyt22ngu580	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p3013ovxytj750r94x	Aprender competencias laborales valoradas por las empresas	Aprende las competencias laborales que son más valoradas por las empresas. Algunos ejemplos de estas competencias son la adaptabilidad, la comunicación, el trabajo en equipo, la solución de conflictos, la planificación y la orientación a resultados. Estas habilidades cambian según el campo laboral en donde se desarrolle, pero usualmente son las habilidades genéricas que todo empleador necesita.	DONE	clxyzm1im00x3vxyt22ngu580	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p3013pvxyt9ivdrwsy	Aprender competencias laborales valoradas por las empresas	Aprende las competencias laborales que son más valoradas por las empresas. Algunos ejemplos de estas competencias son la adaptabilidad, la comunicación, el trabajo en equipo, la solución de conflictos, la planificación y la orientación a resultados. Estas habilidades cambian según el campo laboral en donde se desarrolle, pero usualmente son las habilidades genéricas que todo empleador necesita.	PROGRESS	clxyzm1iq00x5vxyt6wi3plrx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3013qvxytwufh3klh	Realizar un análisis de viabilidad técnica	Realizar un análisis de viabilidad técnica para evaluar si el proyecto es factible desde un punto de vista técnico.	PENDING	clxyzm1iq00x5vxyt6wi3plrx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3013rvxytuyin5z4y	Crear un plan de trabajo detallado	Crear un plan de trabajo detallado que incluya todas las tareas necesarias para completar el proyecto.	DONE	clxyzm1iq00x5vxyt6wi3plrx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3013svxytts47wpzh	Definir objetivos del proyecto	Definir los objetivos específicos y medibles del proyecto.	DONE	clxyzm1iq00x5vxyt6wi3plrx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3013tvxyt2dhjbow8	Establecer un plan de gestión de la adquisición	Establecer un plan de gestión de la adquisición para asegurarse de que los recursos necesarios estén disponibles cuando sean necesarios.	PROGRESS	clxyzm1iq00x5vxyt6wi3plrx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3013uvxyttstcslw6	Realizar un análisis de la cadena de valor compartida	Realizar un análisis de la cadena de valor compartida para identificar oportunidades de colaboración con otros actores de la cadena de valor.	DONE	clxyzm1iv00x7vxyt63qjbudo	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p3013vvxytjple18py	Realizar un análisis de rentabilidad	Realizar un análisis de rentabilidad para evaluar si el proyecto generará beneficios suficientes para justificar la inversión.	DONE	clxyzm1iv00x7vxyt63qjbudo	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p3013wvxyttn1zw7ie	Crear un blog de viajes y aventuras.	Crea un blog de viajes y aventuras donde compartas tus experiencias y consejos para viajar.	DONE	clxyzm1iv00x7vxyt63qjbudo	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p3013xvxytpaf4jwlt	Desarrollar una aplicación de seguimiento de la huella de carbono.	Desarrolla una aplicación de seguimiento de la huella de carbono que ayude a las personas a reducir su impacto ambiental.	PENDING	clxyzm1iv00x7vxyt63qjbudo	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p3013yvxytu9j7wf5p	Definir la estructura del proyecto	Definir la estructura del proyecto para establecer cómo se organizarán las tareas y los recursos.	PROGRESS	clxyzm1iv00x7vxyt63qjbudo	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p3013zvxytyg38lua0	Realizar un análisis de stakeholders	Realizar un análisis de stakeholders para identificar a todas las partes interesadas en el proyecto y sus necesidades.	DONE	clxyzm1iz00x9vxyth6vowsev	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p30140vxyt40f64udj	Establecer un plan de gestión de recursos humanos	Establecer un plan de gestión de recursos humanos para asegurarse de que el equipo tenga las habilidades y la experiencia necesarias para llevar a cabo el proyecto.	PROGRESS	clxyzm1iz00x9vxyth6vowsev	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p30141vxyte2iyw0al	Realizar un análisis de impacto ambiental	Realizar un análisis de impacto ambiental para evaluar cómo afectará el proyecto al medio ambiente.	PENDING	clxyzm1iz00x9vxyth6vowsev	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p30142vxytmwa9onth	Realizar un análisis de la cadena de suministro sostenible	Realizar un análisis de la cadena de suministro sostenible para evaluar cómo el proyecto puede ser más sostenible.	PENDING	clxyzm1iz00x9vxyth6vowsev	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p30143vxyt2v6ppx36	Asignar responsabilidades a los miembros del equipo	Asignar responsabilidades claras a cada miembro del equipo.	DONE	clxyzm1iz00x9vxyth6vowsev	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p30144vxyt0hx1d2lz	Realizar un análisis de la cadena de valor	Realizar un análisis de la cadena de valor para identificar las actividades clave que agregan valor al proyecto.	REVIEW	clxyzm1j400xbvxyt2acull9f	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30145vxytzptnouk7	Establecer un plan de comunicación	Establecer un plan de comunicación para mantener informados a todos los interesados en el proyecto.	REVIEW	clxyzm1j400xbvxyt2acull9f	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30146vxytb2v4vlh3	Escribir un libro de autoayuda y superación personal.	Escribe un libro de autoayuda y superación personal que inspire y motive a los lectores.	PROGRESS	clxyzm1j400xbvxyt2acull9f	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30147vxyt7osw4mvz	Establecer un plan de gestión de la configuración del software	Establecer un plan de gestión de la configuración del software para asegurarse de que se mantenga un registro de todas las versiones y cambios del software.	PROGRESS	clxyzm1j400xbvxyt2acull9f	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30148vxytm6o2pa42	Realizar un análisis de mercado	Realiza un análisis de mercado para obtener información sobre el mercado en el que se encuentra tu empresa. Investiga a la competencia, identifica las tendencias del mercado y analiza las necesidades de los clientes. Utiliza esta información para tomar decisiones informadas sobre el futuro de tu empresa.	REVIEW	clxyzm1j400xbvxyt2acull9f	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30149vxyt3hvidb76	Realizar un análisis FODA	Realizar un análisis FODA para evaluar las fortalezas, debilidades, oportunidades y amenazas del proyecto.	REVIEW	clxyzm1j900xdvxyt6pluiw9m	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014avxytwrkoxvro	Realizar una auditoría interna	Realiza una auditoría interna para evaluar el desempeño de tu empresa. Revisa los procesos internos y identifica las áreas de mejora. Desarrolla un plan de acción para abordar los problemas. Utiliza esta información para mejorar la eficiencia y la eficacia de tu empresa.	PROGRESS	clxyzm1j900xdvxyt6pluiw9m	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014bvxytv534zm0w	Establecer un plan de capacitación	Establecer un plan de capacitación para asegurarse de que los miembros del equipo tengan las habilidades necesarias para llevar a cabo el proyecto.	REVIEW	clxyzm1j900xdvxyt6pluiw9m	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014cvxyt10hi2c0k	Establecer un plan de gestión de la innovación	Establecer un plan de gestión de la innovación para fomentar la creatividad y la innovación en el proyecto.	PENDING	clxyzm1j900xdvxyt6pluiw9m	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014dvxytptr6qe38	Realizar un análisis de la cadena de valor	Realizar un análisis de la cadena de valor para identificar las actividades clave que agregan valor al proyecto.	REVIEW	clxyzm1j900xdvxyt6pluiw9m	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014evxytxoyhj0u2	Realizar un análisis de la cadena de suministro sostenible	Realizar un análisis de la cadena de suministro sostenible para evaluar cómo el proyecto puede ser más sostenible.	DONE	clxyzm1je00xfvxyteyvc91i0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p3014fvxyt0jll9e8h	Identificar recursos necesarios	Identificar los recursos necesarios para llevar a cabo el proyecto, como personal, equipo, materiales, etc.	DONE	clxyzm1je00xfvxyteyvc91i0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p3014gvxytgvwpdxn8	Establecer plazos y fechas límite	Establecer plazos realistas y fechas límite para cada tarea.	PROGRESS	clxyzm1je00xfvxyteyvc91i0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p3014hvxytau5hy8i3	Establecer un plan de gestión de la calidad del software	Establecer un plan de gestión de la calidad del software para asegurarse de que el software cumpla con los estándares de calidad requeridos.	PENDING	clxyzm1je00xfvxyteyvc91i0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p3014ivxytunlvwjpc	Realizar un análisis de la cadena de valor compartida	Realizar un análisis de la cadena de valor compartida para identificar oportunidades de colaboración con otros actores de la cadena de valor.	PROGRESS	clxyzm1je00xfvxyteyvc91i0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p3014jvxytd5pk3dy5	Crear una aplicación de seguimiento de hábitos saludables.	Crea una aplicación que ayude a las personas a llevar un seguimiento de sus hábitos saludables, como la alimentación, el ejercicio y el sueño.	PROGRESS	clxyzm1jl00xhvxyt57mxcfd1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3014kvxytd5bnjg6j	Establecer un plan de capacitación	Establecer un plan de capacitación para asegurarse de que los miembros del equipo tengan las habilidades necesarias para llevar a cabo el proyecto.	PROGRESS	clxyzm1jl00xhvxyt57mxcfd1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3014lvxytrx917qj7	Desarrollar una plataforma de intercambio de idiomas.	Desarrolla una plataforma de intercambio de idiomas donde las personas puedan practicar hablando con hablantes nativos de otros idiomas.	REVIEW	clxyzm1jl00xhvxyt57mxcfd1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3014mvxytkh2firmf	Escribir un blog de música y conciertos.	Escribe un blog de música y conciertos donde compartas tus reseñas y opiniones sobre los últimos lanzamientos y eventos.	REVIEW	clxyzm1jl00xhvxyt57mxcfd1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3014nvxyt03tgw18o	Crear una lista de tareas pendientes	Crea una lista de tareas pendientes que esté organizada y conectada con el trabajo que efectivamente haces. Utiliza una aplicación para to do list para organizar tu trabajo y aumentar la claridad y la eficiencia al máximo. Agrega detalles relevantes para cada tarea, documentos de trabajo o información importante para el caso.	PROGRESS	clxyzm1jl00xhvxyt57mxcfd1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p3014ovxytt77zlfs7	Crear un juego de mesa de estrategia.	Crea un juego de mesa de estrategia que desafíe la mente y la creatividad de los jugadores.	PENDING	clxyzm1jp00xjvxyt444pri0d	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqop00dhvxyt9acxjypl
clxyzm1p3014pvxyth8r0w7il	Escribir un blog de moda y estilo de vida.	Escribe un blog de moda y estilo de vida donde compartas tus consejos y trucos para vestir bien.	DONE	clxyzm1jp00xjvxyt444pri0d	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqop00dhvxyt9acxjypl
clxyzm1p3014qvxyt6n6m5bfb	Identificar recursos necesarios	Identificar los recursos necesarios para llevar a cabo el proyecto, como personal, equipo, materiales, etc.	PENDING	clxyzm1jp00xjvxyt444pri0d	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqop00dhvxyt9acxjypl
clxyzm1p3014rvxyt6pe98xu3	Documentar el proyecto	Documentar el proyecto para que sea fácil de entender y replicar en el futuro.	DONE	clxyzm1jp00xjvxyt444pri0d	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqop00dhvxyt9acxjypl
clxyzm1p3014svxyte686hlu7	Realizar un análisis de la cadena de valor	Realizar un análisis de la cadena de valor para identificar las actividades clave que agregan valor al proyecto.	DONE	clxyzm1jp00xjvxyt444pri0d	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqop00dhvxyt9acxjypl
clxyzm1p3014tvxytnixa36qz	Diseñar una aplicación de aprendizaje de idiomas para niños.	Diseña una aplicación de aprendizaje de idiomas para niños que sea divertida y fácil de usar.	REVIEW	clxyzm1jt00xlvxytvkx889a9	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014uvxyt8of9mvjv	Realizar un análisis de la cadena de suministro	Realizar un análisis de la cadena de suministro para identificar los proveedores y los procesos necesarios para llevar a cabo el proyecto.	DONE	clxyzm1jt00xlvxytvkx889a9	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014vvxythb4qsdhz	Documentar el proyecto	Documentar el proyecto para que sea fácil de entender y replicar en el futuro.	PENDING	clxyzm1jt00xlvxytvkx889a9	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014wvxytka1xo40p	Desarrollar un plan de negocios	Desarrolla un plan de negocios para tu empresa. Incluye una descripción de tu empresa, un análisis de mercado, una estrategia de marketing, un análisis financiero y un plan de operaciones. Utiliza esta información para tomar decisiones informadas sobre el futuro de tu empresa.	DONE	clxyzm1jt00xlvxytvkx889a9	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014xvxyt7rgvo1u2	Crear un podcast de entrevistas a emprendedores exitosos.	Crea un podcast de entrevistas a emprendedores exitosos donde compartan sus experiencias y consejos.	REVIEW	clxyzm1jt00xlvxytvkx889a9	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlq0n00dfvxytllyse2tw
clxyzm1p3014yvxythpo785jg	Establecer un plan de contingencia	Establecer un plan de contingencia para manejar situaciones imprevistas.	PENDING	clxyzm1jy00xnvxytz7shzd1e	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p3014zvxytuvqcke8b	Desarrollar una aplicación de seguimiento de la huella de carbono.	Desarrolla una aplicación de seguimiento de la huella de carbono que ayude a las personas a reducir su impacto ambiental.	PENDING	clxyzm1jy00xnvxytz7shzd1e	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30150vxytaiylpbvm	Identificar y gestionar los cambios	Identificar y gestionar los cambios que puedan surgir durante el proyecto.	PENDING	clxyzm1jy00xnvxytz7shzd1e	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p30151vxythkducmhc	Establecer un plan de capacitación	Establecer un plan de capacitación para asegurarse de que los miembros del equipo tengan las habilidades necesarias para llevar a cabo el proyecto.	PENDING	clxyzm1jy00xnvxytz7shzd1e	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p40152vxyt17er319r	Crear una aplicación de seguimiento de hábitos saludables.	Crea una aplicación que ayude a las personas a llevar un seguimiento de sus hábitos saludables, como la alimentación, el ejercicio y el sueño.	DONE	clxyzm1jy00xnvxytz7shzd1e	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpqe00devxyt9kk8uhnc
clxyzm1p40153vxytxn12dgry	Crear un plan de marketing	Crea un plan de marketing para promocionar tu empresa. Identifica tu público objetivo, establece objetivos de marketing, desarrolla una estrategia de marketing y crea un presupuesto. Utiliza herramientas de marketing digital para llegar a tu público objetivo.	REVIEW	clxyzm1k200xpvxyt6f4ay2gw	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p40154vxyto88xmz4z	Realizar un análisis de la cadena de valor compartida	Realizar un análisis de la cadena de valor compartida para identificar oportunidades de colaboración con otros actores de la cadena de valor.	REVIEW	clxyzm1k200xpvxyt6f4ay2gw	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p40155vxytlzzxkvl6	Crear una aplicación de seguimiento de hábitos saludables.	Crea una aplicación que ayude a las personas a llevar un seguimiento de sus hábitos saludables, como la alimentación, el ejercicio y el sueño.	DONE	clxyzm1k200xpvxyt6f4ay2gw	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p40156vxytl5xzerul	Identificar recursos necesarios	Identificar los recursos necesarios para llevar a cabo el proyecto, como personal, equipo, materiales, etc.	PENDING	clxyzm1k200xpvxyt6f4ay2gw	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p40157vxyt31ptqokd	Establecer un plan de gestión de la integración	Establecer un plan de gestión de la integración para asegurarse de que todas las partes del proyecto trabajen juntas de manera efectiva.	DONE	clxyzm1k200xpvxyt6f4ay2gw	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlojl00davxyti8hlue08
clxyzm1p40158vxytfdghe3al	Establecer un plan de gestión de la configuración	Establecer un plan de gestión de la configuración para asegurarse de que se mantenga un registro de todas las versiones y cambios del proyecto.	REVIEW	clxyzm1k700xrvxytypx4k8f0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p40159vxyt2s6yxsrs	Realizar un análisis de riesgos	Realizar un análisis de riesgos para identificar posibles problemas y establecer planes de contingencia.	DONE	clxyzm1k700xrvxytypx4k8f0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4015avxytqmnnnvnb	Establecer un plan de gestión de calidad	Establecer un plan de gestión de calidad para asegurarse de que el proyecto cumpla con los estándares de calidad requeridos.	PROGRESS	clxyzm1k700xrvxytypx4k8f0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4015bvxytbak41qea	Establecer un plan de gestión de la seguridad de la información	Establecer un plan de gestión de la seguridad de la información para asegurarse de que la información del proyecto esté protegida.	PROGRESS	clxyzm1k700xrvxytypx4k8f0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4015cvxyt1fpfu4mi	Realizar un análisis de viabilidad	Realizar un análisis de viabilidad para evaluar si el proyecto es factible.	REVIEW	clxyzm1k700xrvxytypx4k8f0	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4015dvxytf8tylrre	Establecer un plan de comunicación	Establecer un plan de comunicación para mantener informados a todos los interesados en el proyecto.	REVIEW	clxyzm1kc00xtvxytxg4fb6k1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4015evxyt41nbukwy	Realizar un análisis de mercado	Realizar un análisis de mercado para evaluar la demanda y la competencia del proyecto.	PROGRESS	clxyzm1kc00xtvxytxg4fb6k1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4015fvxytfdea24iz	Establecer objetivos SMART	Establecer objetivos SMART (específicos, medibles, alcanzables, relevantes y con un plazo definido) para asegurarse de que sean claros y alcanzables.	PENDING	clxyzm1kc00xtvxytxg4fb6k1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4015gvxytg7svbxhe	Establecer un plan de gestión de la configuración del software	Establecer un plan de gestión de la configuración del software para asegurarse de que se mantenga un registro de todas las versiones y cambios del software.	PROGRESS	clxyzm1kc00xtvxytxg4fb6k1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4015hvxyt53bbshgj	Establecer un plan de gestión de la información	Establecer un plan de gestión de la información para asegurarse de que la información del proyecto esté disponible y sea precisa.	DONE	clxyzm1kc00xtvxytxg4fb6k1	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4015ivxytmcqryc6l	Desarrollar una plataforma de intercambio de idiomas.	Desarrolla una plataforma de intercambio de idiomas donde las personas puedan practicar hablando con hablantes nativos de otros idiomas.	PENDING	clxyzm1ki00xvvxytuscmxddb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015jvxytg9y02978	Establecer un plan de gestión de la adquisición	Establecer un plan de gestión de la adquisición para asegurarse de que los recursos necesarios estén disponibles cuando sean necesarios.	PROGRESS	clxyzm1ki00xvvxytuscmxddb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015kvxyt20t6qqsd	Crear una tienda en línea de productos ecológicos.	Crea una tienda en línea de productos ecológicos para ayudar a las personas a vivir de manera más sostenible.	PROGRESS	clxyzm1ki00xvvxytuscmxddb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015lvxyt7vn5h2qf	Establecer un plan de gestión de la configuración	Establecer un plan de gestión de la configuración para asegurarse de que se mantenga un registro de todas las versiones y cambios del proyecto.	REVIEW	clxyzm1ki00xvvxytuscmxddb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015mvxytd3hlwxfh	Realizar un análisis de stakeholders	Realizar un análisis de stakeholders para identificar a todas las partes interesadas en el proyecto y sus necesidades.	PROGRESS	clxyzm1ki00xvvxytuscmxddb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015nvxytnmc4zwwe	Realizar un análisis de impacto	Realizar un análisis de impacto para evaluar cómo afectará el proyecto a la organización y a los interesados.	PROGRESS	clxyzm1kt00xxvxyt6xdlddsb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015ovxytbubue1ih	Añadir tareas a flujos de trabajo	Añadir tareas a flujos de trabajo para realizar un seguimiento de las respuestas de encuesta e investigación.	REVIEW	clxyzm1kt00xxvxyt6xdlddsb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015pvxytue17zq6o	Identificar y gestionar los cambios	Identificar y gestionar los cambios que puedan surgir durante el proyecto.	DONE	clxyzm1kt00xxvxyt6xdlddsb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015qvxytgtzyv4h4	Realizar un análisis de la competencia	Realizar un análisis de la competencia para evaluar la competencia y cómo se puede diferenciar el proyecto.	DONE	clxyzm1kt00xxvxyt6xdlddsb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015rvxyt7tfyilcf	Crear un plan de marketing	Crea un plan de marketing para promocionar tu empresa. Identifica tu público objetivo, establece objetivos de marketing, desarrolla una estrategia de marketing y crea un presupuesto. Utiliza herramientas de marketing digital para llegar a tu público objetivo.	DONE	clxyzm1kt00xxvxyt6xdlddsb	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015svxyt7sccskjd	Establecer un plan de gestión de la calidad del software	Establecer un plan de gestión de la calidad del software para asegurarse de que el software cumpla con los estándares de calidad requeridos.	PENDING	clxyzm1ky00xzvxytlgwetvvp	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015tvxytvr4p5kra	Escribir un guion para un cortometraje.	Escribe un guion para un cortometraje que pueda ser producido con un presupuesto bajo.	PENDING	clxyzm1ky00xzvxytlgwetvvp	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015uvxytoay55kx0	Identificar recursos necesarios	Identificar los recursos necesarios para llevar a cabo el proyecto, como personal, equipo, materiales, etc.	REVIEW	clxyzm1ky00xzvxytlgwetvvp	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015vvxyt06qnf851	Realizar un análisis de la cadena de suministro	Realizar un análisis de la cadena de suministro para identificar los proveedores y los procesos necesarios para llevar a cabo el proyecto.	DONE	clxyzm1ky00xzvxytlgwetvvp	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015wvxyt2jwm1vn0	Establecer un plan de gestión de la configuración del software	Establecer un plan de gestión de la configuración del software para asegurarse de que se mantenga un registro de todas las versiones y cambios del software.	REVIEW	clxyzm1ky00xzvxytlgwetvvp	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4015xvxyt3d6cx8ja	Crear una descripción del proyecto	Escribir una descripción del proyecto que se centre en las metas, los objetivos y el enfoque general. Incluye una justificación del proyecto, establece objetivos específicos y medibles, divide el proyecto en fases que describan el resultado deseado para cada una y actualiza y revisa el documento a medida que avanza el proyecto.	PENDING	clxyzm1l500y1vxytx1xruj4u	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015yvxytrha3m389	Realizar un análisis de riesgos ambientales	Realizar un análisis de riesgos ambientales para identificar y manejar los riesgos ambientales asociados con el proyecto.	PENDING	clxyzm1l500y1vxytx1xruj4u	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p4015zvxyt61nj1eib	Establecer un plan de gestión de recursos humanos	Establecer un plan de gestión de recursos humanos para asegurarse de que el equipo tenga las habilidades y la experiencia necesarias para llevar a cabo el proyecto.	PROGRESS	clxyzm1l500y1vxytx1xruj4u	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40160vxytmc8wdkfo	Establecer un plan de gestión de la seguridad	Establecer un plan de gestión de la seguridad para asegurarse de que se tomen medidas para proteger los activos del proyecto.	PENDING	clxyzm1l500y1vxytx1xruj4u	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40161vxytfczn69t7	Identificar recursos necesarios	Identificar los recursos necesarios para llevar a cabo el proyecto, como personal, equipo, materiales, etc.	PENDING	clxyzm1l500y1vxytx1xruj4u	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40162vxytrg0q5ac9	Establecer un plan de capacitación	Establecer un plan de capacitación para asegurarse de que los miembros del equipo tengan las habilidades necesarias para llevar a cabo el proyecto.	PENDING	clxyzm1ld00y3vxytu4rw695z	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40163vxythvpcdpsy	Desarrollar un plan de negocios	Desarrolla un plan de negocios para tu empresa. Incluye una descripción de tu empresa, un análisis de mercado, una estrategia de marketing, un análisis financiero y un plan de operaciones. Utiliza esta información para tomar decisiones informadas sobre el futuro de tu empresa.	DONE	clxyzm1ld00y3vxytu4rw695z	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40164vxyte2pt7mf3	Establecer un plan de gestión de la comunicación	Establecer un plan de gestión de la comunicación para asegurarse de que la información del proyecto se comunique de manera efectiva.	PENDING	clxyzm1ld00y3vxytu4rw695z	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40165vxyt2cng4k8c	Crear y asignar tareas en un espacio de Google Chat	Crea y asigna tareas en un espacio de Google Chat. Puedes editar el título, los detalles, la fecha y hora de la tarea desde tu lista de tareas personales. También puedes marcar la tarea como completada desde tu lista de tareas personales, en lugar de hacerlo desde el espacio. Si realizas cambios en la tarea, esta se actualizará para todos los miembros del espacio, y se mostrará una notificación.	DONE	clxyzm1ld00y3vxytu4rw695z	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40166vxytal2jqnrm	Definir objetivos del proyecto	Definir los objetivos específicos y medibles del proyecto.	PENDING	clxyzm1ld00y3vxytu4rw695z	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlr2900divxyt2lq0s5q5
clxyzm1p40167vxyt8xeivohr	Diseñar una aplicación de seguimiento de gastos personales.	Diseña una aplicación de seguimiento de gastos personales que ayude a las personas a controlar sus finanzas.	PROGRESS	clxyzm1lk00y5vxytglvcl87o	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p40168vxytrfwizij1	Realizar una auditoría interna	Realiza una auditoría interna para evaluar el desempeño de tu empresa. Revisa los procesos internos y identifica las áreas de mejora. Desarrolla un plan de acción para abordar los problemas. Utiliza esta información para mejorar la eficiencia y la eficacia de tu empresa.	PROGRESS	clxyzm1lk00y5vxytglvcl87o	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p40169vxytp4ivmzn4	Definir la estructura del proyecto	Definir la estructura del proyecto para establecer cómo se organizarán las tareas y los recursos.	DONE	clxyzm1lk00y5vxytglvcl87o	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016avxyt7nrakhr2	Crear una aplicación de seguimiento de hábitos saludables.	Crea una aplicación que ayude a las personas a llevar un seguimiento de sus hábitos saludables, como la alimentación, el ejercicio y el sueño.	PROGRESS	clxyzm1lk00y5vxytglvcl87o	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016bvxytexc6d3ez	Escribir un libro de poesía.	Escribe un libro de poesía que refleje tus emociones y pensamientos.	DONE	clxyzm1lk00y5vxytglvcl87o	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016cvxyte7ydvj01	Realizar un análisis de la competencia	Realizar un análisis de la competencia para evaluar la competencia y cómo se puede diferenciar el proyecto.	PROGRESS	clxyzm1lp00y7vxyt94ntj2nc	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016dvxyt27jzxwes	Realizar un análisis FODA	Realizar un análisis FODA para evaluar las fortalezas, debilidades, oportunidades y amenazas del proyecto.	REVIEW	clxyzm1lp00y7vxyt94ntj2nc	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016evxytt3uqh607	Desarrollar un plan de negocios	Desarrolla un plan de negocios para tu empresa. Incluye una descripción de tu empresa, un análisis de mercado, una estrategia de marketing, un análisis financiero y un plan de operaciones. Utiliza esta información para tomar decisiones informadas sobre el futuro de tu empresa.	PROGRESS	clxyzm1lp00y7vxyt94ntj2nc	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016fvxytsac71bwi	Realizar un análisis de la cadena de suministro sostenible	Realizar un análisis de la cadena de suministro sostenible para evaluar cómo el proyecto puede ser más sostenible.	REVIEW	clxyzm1lp00y7vxyt94ntj2nc	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016gvxytcjc30vyk	Definir los criterios de éxito	Definir los criterios que se utilizarán para evaluar el éxito del proyecto.	PROGRESS	clxyzm1lp00y7vxyt94ntj2nc	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016hvxytym427z3e	Realizar un análisis de la cadena de valor compartida	Realizar un análisis de la cadena de valor compartida para identificar oportunidades de colaboración con otros actores de la cadena de valor.	REVIEW	clxyzm1lw00y9vxytsk1am69l	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4016ivxytivmndyeo	Crear una tienda en línea de productos ecológicos.	Crea una tienda en línea de productos ecológicos para ayudar a las personas a vivir de manera más sostenible.	PENDING	clxyzm1lw00y9vxytsk1am69l	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4016jvxythapkadm9	Establecer un plan de contingencia	Establecer un plan de contingencia para manejar situaciones imprevistas.	PROGRESS	clxyzm1lw00y9vxytsk1am69l	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4016kvxytf504vslj	Establecer un plan de gestión de calidad	Establecer un plan de gestión de calidad para asegurarse de que el proyecto cumpla con los estándares de calidad requeridos.	DONE	clxyzm1lw00y9vxytsk1am69l	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4016lvxytchvro8ir	Establecer un plan de gestión de la información	Establecer un plan de gestión de la información para asegurarse de que la información del proyecto esté disponible y sea precisa.	DONE	clxyzm1lw00y9vxytsk1am69l	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p4016mvxytacry7ozt	Crear un plan de marketing	Crea un plan de marketing para promocionar tu empresa. Identifica tu público objetivo, establece objetivos de marketing, desarrolla una estrategia de marketing y crea un presupuesto. Utiliza herramientas de marketing digital para llegar a tu público objetivo.	DONE	clxyzm1m300ybvxytmsu41l26	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4016nvxytmk0l6ysm	Establecer objetivos SMART	Establecer objetivos SMART (específicos, medibles, alcanzables, relevantes y con un plazo definido) para asegurarse de que sean claros y alcanzables.	PENDING	clxyzm1m300ybvxytmsu41l26	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4016ovxytodp8437z	Establecer un plan de gestión de la seguridad de la cadena de suministro	Establecer un plan de gestión de la seguridad de la cadena de suministro para asegurarse de que los proveedores cumplan con los estándares de seguridad.	PENDING	clxyzm1m300ybvxytmsu41l26	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4016pvxytd1uzwwxc	Realizar un análisis de rentabilidad	Realizar un análisis de rentabilidad para evaluar si el proyecto generará beneficios suficientes para justificar la inversión.	PENDING	clxyzm1m300ybvxytmsu41l26	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4016qvxyt6lkt4qru	Crear un canal de YouTube de comedia.	Crea un canal de YouTube de comedia donde puedas compartir tus sketches y parodias.	REVIEW	clxyzm1m300ybvxytmsu41l26	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlos600dbvxytk7ukhabx
clxyzm1p4016rvxytbpnedpzj	Realizar pruebas y validaciones	Realizar pruebas y validaciones para asegurarse de que el proyecto cumpla con los requisitos.	PENDING	clxyzm1ma00ydvxytexdoagwx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016svxytcnx698s2	Establecer un plan de gestión de la seguridad	Establecer un plan de gestión de la seguridad para asegurarse de que se tomen medidas para proteger los activos del proyecto.	PROGRESS	clxyzm1ma00ydvxytexdoagwx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016tvxyt4lkg2qed	Establecer un plan de comunicación	Establecer un plan de comunicación para mantener informados a todos los interesados en el proyecto.	REVIEW	clxyzm1ma00ydvxytexdoagwx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016uvxytsrpj7s34	Establecer un plan de gestión de la integración	Establecer un plan de gestión de la integración para asegurarse de que todas las partes del proyecto trabajen juntas de manera efectiva.	PROGRESS	clxyzm1ma00ydvxytexdoagwx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016vvxytrx7yvbvx	Definir objetivos del proyecto	Definir los objetivos específicos y medibles del proyecto.	PENDING	clxyzm1ma00ydvxytexdoagwx	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p4016wvxyt8rjccgtb	Identificar y gestionar los cambios	Identificar y gestionar los cambios que puedan surgir durante el proyecto.	REVIEW	clxyzm1mg00yfvxytk4qbftkg	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4016xvxytuverc78e	Aprender competencias laborales valoradas por las empresas	Aprende las competencias laborales que son más valoradas por las empresas. Algunos ejemplos de estas competencias son la adaptabilidad, la comunicación, el trabajo en equipo, la solución de conflictos, la planificación y la orientación a resultados. Estas habilidades cambian según el campo laboral en donde se desarrolle, pero usualmente son las habilidades genéricas que todo empleador necesita.	DONE	clxyzm1mg00yfvxytk4qbftkg	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4016yvxythbef4v8b	Realizar un análisis de la competencia	Realizar un análisis de la competencia para evaluar la competencia y cómo se puede diferenciar el proyecto.	PROGRESS	clxyzm1mg00yfvxytk4qbftkg	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p4016zvxytbnzbm6yp	Desarrollar una aplicación de meditación y relajación.	Desarrolla una aplicación de meditación y relajación que ayude a las personas a reducir el estrés y la ansiedad.	PENDING	clxyzm1mg00yfvxytk4qbftkg	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p40170vxytk6ymiba0	Escribir un blog de música y conciertos.	Escribe un blog de música y conciertos donde compartas tus reseñas y opiniones sobre los últimos lanzamientos y eventos.	PROGRESS	clxyzm1mg00yfvxytk4qbftkg	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlrho00djvxytzqntoe14
clxyzm1p40171vxytw9eykmtx	Crear un blog de viajes y aventuras.	Crea un blog de viajes y aventuras donde compartas tus experiencias y consejos para viajar.	REVIEW	clxyzm1mm00yhvxytcx60skms	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpe100ddvxytbq5xl57h
clxyzm1p40172vxyth0nmb7y5	Desarrollar una plataforma de intercambio de idiomas.	Desarrolla una plataforma de intercambio de idiomas donde las personas puedan practicar hablando con hablantes nativos de otros idiomas.	DONE	clxyzm1mm00yhvxytcx60skms	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpe100ddvxytbq5xl57h
clxyzm1p40173vxytan8uyc4z	Crear un canal de YouTube de tutoriales de maquillaje.	Crea un canal de YouTube de tutoriales de maquillaje donde compartas tus técnicas y consejos para lucir hermosa.	PENDING	clxyzm1mm00yhvxytcx60skms	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpe100ddvxytbq5xl57h
clxyzm1p40174vxytochxbzra	Desarrollar una plataforma de crowdfunding para proyectos sociales.	Desarrolla una plataforma de crowdfunding para proyectos sociales que permita a las personas apoyar causas que les importan.	REVIEW	clxyzm1mm00yhvxytcx60skms	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpe100ddvxytbq5xl57h
clxyzm1p40175vxytuvob5qa2	Realizar un análisis de competidores	Realizar un análisis de competidores para evaluar la competencia y cómo se puede diferenciar el proyecto.	REVIEW	clxyzm1mm00yhvxytcx60skms	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlpe100ddvxytbq5xl57h
clxyzm1p50176vxytlwgrnzpk	Aprender competencias laborales valoradas por las empresas	Aprende las competencias laborales que son más valoradas por las empresas. Algunos ejemplos de estas competencias son la adaptabilidad, la comunicación, el trabajo en equipo, la solución de conflictos, la planificación y la orientación a resultados. Estas habilidades cambian según el campo laboral en donde se desarrolle, pero usualmente son las habilidades genéricas que todo empleador necesita.	PENDING	clxyzm1mr00yjvxytoxij5o16	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p50177vxytbnze32fb	Establecer un presupuesto	Establecer un presupuesto para el proyecto y asegurarse de que se ajuste a los recursos disponibles.	PROGRESS	clxyzm1mr00yjvxytoxij5o16	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p50178vxyt2vlwmyb8	Desarrollar una plataforma de crowdfunding para proyectos sociales.	Desarrolla una plataforma de crowdfunding para proyectos sociales que permita a las personas apoyar causas que les importan.	PENDING	clxyzm1mr00yjvxytoxij5o16	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p50179vxyt350mau18	Crear un canal de YouTube de tutoriales de maquillaje.	Crea un canal de YouTube de tutoriales de maquillaje donde compartas tus técnicas y consejos para lucir hermosa.	DONE	clxyzm1mr00yjvxytoxij5o16	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p5017avxyt2j3ly1vc	Establecer plazos y fechas límite	Establecer plazos realistas y fechas límite para cada tarea.	PENDING	clxyzm1mr00yjvxytoxij5o16	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p5017bvxytyqcmpcsn	Establecer un plan de gestión de la integración	Establecer un plan de gestión de la integración para asegurarse de que todas las partes del proyecto trabajen juntas de manera efectiva.	REVIEW	clxyzm1mx00ylvxyt8dlx9c60	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p5017cvxyt97lhrvx9	Diseñar un programa de entrenamiento físico en línea.	Diseña un programa de entrenamiento físico en línea que pueda ser personalizado para cada usuario.	PENDING	clxyzm1mx00ylvxyt8dlx9c60	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p5017dvxyt0dvkt7sw	Establecer un plan de gestión de la adquisición	Establecer un plan de gestión de la adquisición para asegurarse de que los recursos necesarios estén disponibles cuando sean necesarios.	DONE	clxyzm1mx00ylvxyt8dlx9c60	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p5017evxyt7t28q38l	Realizar un análisis de mercado	Realizar un análisis de mercado para evaluar la demanda y la competencia del proyecto.	PROGRESS	clxyzm1mx00ylvxyt8dlx9c60	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p5017fvxytlajerfaq	Establecer un plan de gestión de la documentación	Establecer un plan de gestión de la documentación para asegurarse de que la documentación del proyecto esté disponible y sea precisa.	REVIEW	clxyzm1mx00ylvxyt8dlx9c60	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlp2e00dcvxytkej59ozk
clxyzm1p5017gvxyt05feqm1m	Establecer un plan de comunicación	Establecer un plan de comunicación para mantener informados a todos los interesados en el proyecto.	PROGRESS	clxyzm1n200ynvxytmzffh7rj	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p5017hvxytgadeu7kx	Crear una aplicación de seguimiento de hábitos saludables.	Crea una aplicación que ayude a las personas a llevar un seguimiento de sus hábitos saludables, como la alimentación, el ejercicio y el sueño.	REVIEW	clxyzm1n200ynvxytmzffh7rj	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p5017ivxyto25hsl1x	Crear un juego de mesa educativo para niños.	Crea un juego de mesa educativo para niños que les enseñe sobre la historia, la ciencia o la cultura.	PENDING	clxyzm1n200ynvxytmzffh7rj	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p5017jvxytopoq2nui	Crear una aplicación de seguimiento de hábitos saludables.	Crea una aplicación que ayude a las personas a llevar un seguimiento de sus hábitos saludables, como la alimentación, el ejercicio y el sueño.	DONE	clxyzm1n200ynvxytmzffh7rj	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzm1p5017kvxytz2ck9ikc	Identificar recursos necesarios	Identificar los recursos necesarios para llevar a cabo el proyecto, como personal, equipo, materiales, etc.	DONE	clxyzm1n200ynvxytmzffh7rj	2024-06-28 17:48:48.278	2024-06-28 17:48:48.278	clxyzlqca00dgvxytmb72d25h
clxyzmdgo01ilvxytph4t2evc	Gestionar registro en excel	Se requiere actualizar y añadir nuevos registros en el archivo excel de finanzas año 2023	\N	clxyzmdfv01i5vxyty60ei96q	2024-06-28 17:49:03.528	2024-06-28 17:49:03.528	clxyzlq0n00dfvxytllyse2tw
\.


--
-- Data for Name: Message; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Message" (id, content, "personId", "companyId", "teamId", "projectId", "taskId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Notification; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Notification" (id, "authUserId", "createdAt", "updatedAt", data, type) FROM stdin;
\.


--
-- Data for Name: Participation; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Participation" (id, "taskId", "createdAt", "updatedAt", "personId") FROM stdin;
clxyzm1ua019svxytj2wmuppr	clxyzm1p30149vxyt3hvidb76	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ua019tvxytdqf9afva	clxyzm1p30149vxyt3hvidb76	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua019uvxyth68l5kza	clxyzm1p30149vxyt3hvidb76	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua019vvxyt8yqykfhb	clxyzm1p3014avxytwrkoxvro	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua019wvxytepb3hijj	clxyzm1p3014avxytwrkoxvro	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ua019xvxyt485j4ile	clxyzm1p3014avxytwrkoxvro	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua019yvxytgjl41ilv	clxyzm1p3014bvxytv534zm0w	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ua019zvxyteyibz6eu	clxyzm1p3014bvxytv534zm0w	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlojl00davxyti8hlue08
clxyzm1ua01a0vxytj8cvma41	clxyzm1p3014bvxytv534zm0w	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01a1vxytt6qd4kn9	clxyzm1p3014cvxyt10hi2c0k	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ua01a2vxyt5fy5x9b3	clxyzm1p3014cvxyt10hi2c0k	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01a3vxytsoiddjj1	clxyzm1p3014cvxyt10hi2c0k	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ua01a4vxyt0ygty85b	clxyzm1p3014dvxytptr6qe38	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01a5vxytcm9eusvr	clxyzm1p3014dvxytptr6qe38	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01a6vxyt963s6lzn	clxyzm1p3014dvxytptr6qe38	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ua01a7vxytygcuu7s8	clxyzm1p3014evxytxoyhj0u2	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ua01a8vxytxjgu6d5i	clxyzm1p3014fvxyt0jll9e8h	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ua01a9vxytvaqhsdtt	clxyzm1p3014gvxytgvwpdxn8	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ua01aavxytkdm59fgi	clxyzm1p3014hvxytau5hy8i3	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ua01abvxytndttwes2	clxyzm1p3014ivxytunlvwjpc	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ua01acvxytoldd4nkv	clxyzm1p3014ovxytt77zlfs7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01advxytvm0o32je	clxyzm1p3014ovxytt77zlfs7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpe100ddvxytbq5xl57h
clxyzm1ua01aevxyt3zgo3ekn	clxyzm1p3014ovxytt77zlfs7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01afvxytz2z14c1l	clxyzm1p3014pvxyth8r0w7il	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpqe00devxyt9kk8uhnc
clxyzm1ua01agvxytfhamd4lb	clxyzm1p3014pvxyth8r0w7il	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpqe00devxyt9kk8uhnc
clxyzm1ua01ahvxyt953mh3an	clxyzm1p3014pvxyth8r0w7il	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01aivxytuo6gunjg	clxyzm1p3014qvxyt6n6m5bfb	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpe100ddvxytbq5xl57h
clxyzm1ua01ajvxytd7sobg3l	clxyzm1p3014qvxyt6n6m5bfb	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpqe00devxyt9kk8uhnc
clxyzm1ua01akvxyt6mje3fyx	clxyzm1p3014qvxyt6n6m5bfb	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ua01alvxytwrfalabo	clxyzm1p3014rvxyt6pe98xu3	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01amvxytocoh4p4a	clxyzm1p3014rvxyt6pe98xu3	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpqe00devxyt9kk8uhnc
clxyzm1ua01anvxytcvryc7jp	clxyzm1p3014rvxyt6pe98xu3	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01aovxytkcd8f8wt	clxyzm1p3014svxyte686hlu7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ua01apvxyt7auyym8z	clxyzm1p3014svxyte686hlu7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01aqvxytv89ed4vu	clxyzm1p3014svxyte686hlu7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpqe00devxyt9kk8uhnc
clxyzm1ua01arvxyt0pdfxmc9	clxyzm1p3014tvxytnixa36qz	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01asvxytp51zarvo	clxyzm1p3014uvxyt8of9mvjv	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01atvxytf18uipqi	clxyzm1p3014vvxythb4qsdhz	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01auvxytcsq6c3pr	clxyzm1p3014wvxytka1xo40p	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01avvxytn9mntzvd	clxyzm1p3014xvxyt7rgvo1u2	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlq0n00dfvxytllyse2tw
clxyzm1ua01awvxytj76ie95v	clxyzm1p3014yvxythpo785jg	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ua01axvxytc3a1akgz	clxyzm1p3014yvxythpo785jg	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01ayvxyt3c8kakyi	clxyzm1p3014yvxythpo785jg	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01azvxytdrbfzy4q	clxyzm1p3014zvxytuvqcke8b	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ua01b0vxyt6h2dbe06	clxyzm1p3014zvxytuvqcke8b	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01b1vxyt9q55c7d2	clxyzm1p3014zvxytuvqcke8b	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01b2vxyt4ikx0opz	clxyzm1p30150vxytaiylpbvm	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01b3vxyt6fs9c0dx	clxyzm1p30150vxytaiylpbvm	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01b4vxytlqwva2n4	clxyzm1p30150vxytaiylpbvm	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ua01b5vxyt7rr7jtvf	clxyzm1p30151vxythkducmhc	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ua01b6vxyttmpgr0i8	clxyzm1p30151vxythkducmhc	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01b7vxyt8y7ox3sr	clxyzm1p30151vxythkducmhc	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01b8vxyt3bhvm72v	clxyzm1p40152vxyt17er319r	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01b9vxytep4sgswz	clxyzm1p40152vxyt17er319r	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bavxyt933lsljw	clxyzm1p40152vxyt17er319r	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpe100ddvxytbq5xl57h
clxyzm1ub01bbvxytu9mdsh38	clxyzm1p40158vxytfdghe3al	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bcvxyt27e4b20m	clxyzm1p40159vxyt2s6yxsrs	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bdvxytzwvqa4t9	clxyzm1p4015avxytqmnnnvnb	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bevxytuxpncmu5	clxyzm1p4015bvxytbak41qea	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bfvxythol86jut	clxyzm1p4015cvxyt1fpfu4mi	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bgvxytjluon4s1	clxyzm1p4015dvxytf8tylrre	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01bhvxyty71h58h9	clxyzm1p4015dvxytf8tylrre	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlpe100ddvxytbq5xl57h
clxyzm1ub01bivxytj8fd66yc	clxyzm1p4015dvxytf8tylrre	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01bjvxytd08sxnsp	clxyzm1p4015evxyt41nbukwy	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ub01bkvxytof7lgjez	clxyzm1p4015evxyt41nbukwy	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01blvxytft4apdkq	clxyzm1p4015evxyt41nbukwy	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlojl00davxyti8hlue08
clxyzm1ub01bmvxyt54vkqz0u	clxyzm1p4015fvxytfdea24iz	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ub01bnvxytaogfnt9l	clxyzm1p4015fvxytfdea24iz	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlojl00davxyti8hlue08
clxyzm1ub01bovxyttzhemlx7	clxyzm1p4015fvxytfdea24iz	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bpvxyt63k48gou	clxyzm1p4015gvxytg7svbxhe	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ub01bqvxyt7q7b7xjl	clxyzm1p4015gvxytg7svbxhe	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlojl00davxyti8hlue08
clxyzm1ub01brvxyt66c6ws80	clxyzm1p4015gvxytg7svbxhe	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01bsvxyt3yk8f75i	clxyzm1p4015hvxyt53bbshgj	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlojl00davxyti8hlue08
clxyzm1ub01btvxytiju5kvc8	clxyzm1p4015hvxyt53bbshgj	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ub01buvxyt396sghmh	clxyzm1p4015hvxyt53bbshgj	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01bvvxytjsosk4cz	clxyzm1p4015ivxytmcqryc6l	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01bwvxyt86fi6mwb	clxyzm1p4015ivxytmcqryc6l	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01bxvxytlk3gapdm	clxyzm1p4015ivxytmcqryc6l	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01byvxytr01ctbc3	clxyzm1p4015jvxytg9y02978	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01bzvxytl0obtgqs	clxyzm1p4015jvxytg9y02978	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01c0vxytjx3ft1x7	clxyzm1p4015jvxytg9y02978	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01c1vxyt3exesfy8	clxyzm1p4015kvxyt20t6qqsd	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01c2vxyt6drvnfyu	clxyzm1p4015kvxyt20t6qqsd	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01c3vxytp7dqs9yt	clxyzm1p4015kvxyt20t6qqsd	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01c4vxytmd8qokt1	clxyzm1p4015lvxyt7vn5h2qf	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01c5vxyt5kybrp0t	clxyzm1p4015lvxyt7vn5h2qf	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01c6vxyt1ttd2mri	clxyzm1p4015lvxyt7vn5h2qf	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01c7vxyt2f70czxh	clxyzm1p4015mvxytd3hlwxfh	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01c8vxytmd1bot82	clxyzm1p4015mvxytd3hlwxfh	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01c9vxytyqsmuqgp	clxyzm1p4015mvxytd3hlwxfh	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01cavxyt3kppg4uh	clxyzm1p4015xvxyt3d6cx8ja	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01cbvxyt1hnzuvrh	clxyzm1p4015xvxyt3d6cx8ja	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01ccvxytviuqsvzd	clxyzm1p4015xvxyt3d6cx8ja	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ub01cdvxytgp5ihw93	clxyzm1p4015yvxytrha3m389	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01cevxytsqhqq1qw	clxyzm1p4015yvxytrha3m389	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01cfvxyt0egxt8us	clxyzm1p4015yvxytrha3m389	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01cgvxytycjbxaq6	clxyzm1p4015zvxyt61nj1eib	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ub01chvxyt6bu4trx8	clxyzm1p4015zvxyt61nj1eib	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01civxyto8up26r3	clxyzm1p4015zvxyt61nj1eib	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlos600dbvxytk7ukhabx
clxyzm1ub01cjvxyth25mufch	clxyzm1p40160vxytmc8wdkfo	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01ckvxytht8dix31	clxyzm1p40160vxytmc8wdkfo	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqop00dhvxyt9acxjypl
clxyzm1ub01clvxyt5htfnztc	clxyzm1p40160vxytmc8wdkfo	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ub01cmvxytvdn49tzm	clxyzm1p40161vxytfczn69t7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01cnvxytuf14frxk	clxyzm1p40161vxytfczn69t7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ub01covxytzrybu0ar	clxyzm1p40161vxytfczn69t7	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlr2900divxyt2lq0s5q5
clxyzm1ub01cpvxytg7xlkada	clxyzm1p4016cvxyte7ydvj01	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01cqvxytmap0477a	clxyzm1p4016dvxyt27jzxwes	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01crvxyt85y9glic	clxyzm1p4016evxytt3uqh607	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01csvxytkcqeqklm	clxyzm1p4016fvxytsac71bwi	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01ctvxytquc1gtpb	clxyzm1p4016gvxytcjc30vyk	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlp2e00dcvxytkej59ozk
clxyzm1ub01cuvxyt2ey7sz8q	clxyzm1p4016wvxyt8rjccgtb	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01cvvxyt1v6fc7fl	clxyzm1p4016xvxytuverc78e	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01cwvxytfmw34886	clxyzm1p4016yvxythbef4v8b	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01cxvxytmybtvn0n	clxyzm1p4016zvxytbnzbm6yp	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01cyvxytoenm3v74	clxyzm1p40170vxytk6ymiba0	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlrho00djvxytzqntoe14
clxyzm1ub01czvxyttr8ih44f	clxyzm1p50176vxytlwgrnzpk	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01d0vxytzwq8ei13	clxyzm1p50177vxytbnze32fb	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01d1vxytdoq8wudf	clxyzm1p50178vxyt2vlwmyb8	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01d2vxyt08p411zu	clxyzm1p50179vxyt350mau18	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzm1ub01d3vxytljssjwcj	clxyzm1p5017avxyt2j3ly1vc	2024-06-28 17:48:48.465	2024-06-28 17:48:48.465	clxyzlqca00dgvxytmb72d25h
clxyzmdgo01imvxytuo8umbsb	clxyzmdgo01ilvxytph4t2evc	2024-06-28 17:49:03.528	2024-06-28 17:49:03.528	clxyzlos600dbvxytk7ukhabx
clxyzmdgo01invxytsd4tmbqc	clxyzmdgo01ilvxytph4t2evc	2024-06-28 17:49:03.528	2024-06-28 17:49:03.528	clxyzlp2e00dcvxytkej59ozk
clxyzmdgo01iovxytyk6m1mrr	clxyzmdgo01ilvxytph4t2evc	2024-06-28 17:49:03.528	2024-06-28 17:49:03.528	clxyzlpe100ddvxytbq5xl57h
clxyzmdgo01ipvxytv2umz7cu	clxyzmdgo01ilvxytph4t2evc	2024-06-28 17:49:03.528	2024-06-28 17:49:03.528	clxyzlpqe00devxyt9kk8uhnc
clxyzmdgo01iqvxyt5cso0npr	clxyzmdgo01ilvxytph4t2evc	2024-06-28 17:49:03.528	2024-06-28 17:49:03.528	clxyzlq0n00dfvxytllyse2tw
\.


--
-- Data for Name: Vacant; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Vacant" (id, "limit", "jobId", "companyId", "locationId", "createdAt", "updatedAt", description, duration) FROM stdin;
clxyzm21y01fdvxyt1jp1azrq	9	clxyzlo2100cqvxyt1xjb5lw3	clxyzlvik00dsvxytwp7dlxo8	clxyzlnyk0039vxyt80qt6ydc	2024-06-28 17:48:48.742	2024-06-28 17:48:48.742	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm22d01ffvxyt0joev7hq	10	clxyzlo2100d5vxytj6wuc3ak	clxyzlvzk00dtvxyt92njp93i	clxyzlnyl003wvxytpkqw0g5j	2024-06-28 17:48:48.757	2024-06-28 17:48:48.757	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	2
clxyzm22n01fhvxyt6sxpj5mx	2	clxyzlo2100chvxytfsvc15ql	clxyzluom00dqvxyty4ztbf37	clxyzlnyj001nvxytsc3pym2l	2024-06-28 17:48:48.768	2024-06-28 17:48:48.768	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	2
clxyzm22y01fjvxyt593h3vlk	5	clxyzlo2100d6vxytzsfqooet	clxyzlvik00dsvxytwp7dlxo8	clxyzlnyn006rvxyt5br7egnd	2024-06-28 17:48:48.779	2024-06-28 17:48:48.779	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm23701flvxyt85xqhcej	8	clxyzlo2100cwvxytzppxxq2y	clxyzlvzk00dtvxyt92njp93i	clxyzlnym006gvxyt5gqnbaiz	2024-06-28 17:48:48.787	2024-06-28 17:48:48.787	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm23j01fnvxyt262w6ni9	1	clxyzlo2100cuvxytk4e22pl0	clxyzltfv00dnvxythvv9u3bp	clxyzlnyl0057vxythqjiuitz	2024-06-28 17:48:48.799	2024-06-28 17:48:48.799	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	3
clxyzm23x01fpvxytue9bcdwo	2	clxyzlo2100d1vxytdfw2w77f	clxyzlvik00dsvxytwp7dlxo8	clxyzlnyk002dvxyt7etky0j1	2024-06-28 17:48:48.813	2024-06-28 17:48:48.813	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm24a01frvxyt7nvd86is	5	clxyzlo2100cnvxytnfdrj32m	clxyzlv3k00drvxyteq63hs0f	clxyzlnyl004vvxytrejry9kn	2024-06-28 17:48:48.827	2024-06-28 17:48:48.827	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm24m01ftvxytbwo56nyd	4	clxyzlo2100d0vxytpao21xgj	clxyzlvik00dsvxytwp7dlxo8	clxyzlnyo00a4vxyttwdsk1oo	2024-06-28 17:48:48.838	2024-06-28 17:48:48.838	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	3
clxyzm24v01fvvxyt1ixuhon7	8	clxyzlo2100d8vxytr2piql1e	clxyzltuj00dovxyt6xy3u3vv	clxyzlnym0063vxytf8heb60t	2024-06-28 17:48:48.848	2024-06-28 17:48:48.848	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm25501fxvxyt57o8ts5v	6	clxyzlo2100cvvxytrqwm107p	clxyzluom00dqvxyty4ztbf37	clxyzlnyn006qvxytc1oby4sl	2024-06-28 17:48:48.857	2024-06-28 17:48:48.857	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm25g01fzvxyt3myviaef	1	clxyzlo2100ctvxytlnh6bc2p	clxyzls2o00dkvxytlj0rm5lj	clxyzlnyj0017vxytqvsk5g7k	2024-06-28 17:48:48.868	2024-06-28 17:48:48.868	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	1
clxyzm25q01g1vxyt8mmmpb1v	7	clxyzlo2100civxytmkdim27j	clxyzltuj00dovxyt6xy3u3vv	clxyzlnyj000zvxytig72avpr	2024-06-28 17:48:48.878	2024-06-28 17:48:48.878	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	3
clxyzm25z01g3vxytffxcdzn8	4	clxyzlo2100covxytakvp8xgo	clxyzlv3k00drvxyteq63hs0f	clxyzlnyj001avxytcyfa3b4d	2024-06-28 17:48:48.888	2024-06-28 17:48:48.888	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	2
clxyzm26701g5vxyt83ue4gzq	4	clxyzlo2100cfvxyt3m82j21l	clxyzlsiw00dlvxytfatbyzks	clxyzlnyn0088vxytrx9gpven	2024-06-28 17:48:48.896	2024-06-28 17:48:48.896	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	2
clxyzm26i01g7vxytcjkdjmlc	4	clxyzlo2100cfvxyt3m82j21l	clxyzltfv00dnvxythvv9u3bp	clxyzlnyn007uvxyt98s7rt6b	2024-06-28 17:48:48.907	2024-06-28 17:48:48.907	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	4
clxyzm26p01g9vxytsoe0rshz	6	clxyzlo2100cqvxyt1xjb5lw3	clxyzlsiw00dlvxytfatbyzks	clxyzlnym005uvxyt8pcmoqnc	2024-06-28 17:48:48.914	2024-06-28 17:48:48.914	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	4
clxyzm26x01gbvxytxrbzr50i	1	clxyzlo2100cgvxytj2tlsswh	clxyzlvzk00dtvxyt92njp93i	clxyzlnyk003fvxyt1vpqhujf	2024-06-28 17:48:48.921	2024-06-28 17:48:48.921	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	4
clxyzm27301gdvxytmlidjri7	2	clxyzlo2100d5vxytj6wuc3ak	clxyzluom00dqvxyty4ztbf37	clxyzlnyn006zvxyte4z37urx	2024-06-28 17:48:48.927	2024-06-28 17:48:48.927	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	5
clxyzm27901gfvxyta3h306ug	8	clxyzlo2100d9vxytv22nggdr	clxyzlv3k00drvxyteq63hs0f	clxyzlnyl003ovxyt75dktlmq	2024-06-28 17:48:48.933	2024-06-28 17:48:48.933	Se solicita pasante para puesto en empresa con trabajo a tiempo parcial, en un equipo donde podrá conseguir experiencia para prepararse para futuros empleos.	3
clxyzmddz01hivxytssdc4qer	10	clxyzlo2100cdvxytb9v1i90d	clxyzlsiw00dlvxytfatbyzks	clxyzlnyk0020vxytlbh1fsme	2024-06-28 17:49:03.432	2024-06-28 17:49:03.432	Se busca pasante Desarrollador de software para trabajar a tiempo parcial. Únete a nuestra empresa y consigue experiencia en el mundo real.	30
clxyzmdek01hqvxyt6fmz9k4p	5	clxyzlo2100covxytakvp8xgo	clxyzlsiw00dlvxytfatbyzks	clxyzlnyk0020vxytlbh1fsme	2024-06-28 17:49:03.452	2024-06-28 17:49:03.452	Se busca un pasante para trabajar como Técnico de Soporte, a tiempo parcial. Únete a nuestra empresa y consigue experiencia en el mundo real.	90
clxyzmdgw01ivvxytdaki4amk	6	clxyzlo2100cdvxytb9v1i90d	clxyzls2o00dkvxytlj0rm5lj	clxyzlnyk0020vxytlbh1fsme	2024-06-28 17:49:03.536	2024-06-28 17:49:03.536	Se solicita pasante en el área de finanzas con poca experiencia laboral	30
\.


--
-- Data for Name: Recruitment; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Recruitment" (id, "internshipId", "createdAt", "updatedAt", interested, "vacantId", status, "endsAt", "startsAt") FROM stdin;
clxyzmci801ggvxytx86ymc9c	clxyzm20o01f9vxyt75ld938g	2024-06-28 17:49:02.289	2024-06-28 17:49:02.289	PERSON	clxyzm22n01fhvxyt6sxpj5mx	REJECTED	2024-07-30 20:23:52.539	2024-06-30 17:37:39.531
clxyzmci801ghvxyt5i3eyofx	clxyzm20o01f9vxyt75ld938g	2024-06-28 17:49:02.289	2024-06-28 17:49:02.289	PERSON	clxyzm27901gfvxyta3h306ug	ACCEPTED	2024-08-07 09:38:55.81	2024-06-22 07:29:26.008
clxyzmci801givxytz6wdbwh9	clxyzm20o01f9vxyt75ld938g	2024-06-28 17:49:02.289	2024-06-28 17:49:02.289	PERSON	clxyzm24a01frvxyt7nvd86is	ACCEPTED	2024-08-18 10:56:29.644	2024-06-24 19:14:06.09
clxyzmci801gjvxyt1darx6w9	clxyzm20o01f9vxyt75ld938g	2024-06-28 17:49:02.289	2024-06-28 17:49:02.289	COMPANY	clxyzm25q01g1vxyt8mmmpb1v	ACCEPTED	2024-07-25 23:04:29.679	2024-06-24 04:02:32.031
clxyzmci801gkvxytkq7vpo1s	clxyzm20o01f9vxyt75ld938g	2024-06-28 17:49:02.289	2024-06-28 17:49:02.289	COMPANY	clxyzm23j01fnvxyt262w6ni9	REJECTED	2024-08-29 04:32:45.755	2024-06-29 14:43:09.461
clxyzmdeb01hjvxytsjutacn9	clxyzmddq01hgvxytsokvokp2	2024-06-28 17:49:03.443	2024-06-28 17:49:03.443	PERSON	clxyzm21y01fdvxyt1jp1azrq	PENDING	2024-08-28 17:49:03.355	2024-07-13 17:49:03.355
clxyzmdeb01hkvxytqdxn3d7l	clxyzmddq01hgvxytsokvokp2	2024-06-28 17:49:03.443	2024-06-28 17:49:03.443	COMPANY	clxyzm22d01ffvxyt0joev7hq	PENDING	2024-08-28 17:49:03.355	2024-07-13 17:49:03.355
clxyzmdeb01hlvxyte8vmrygw	clxyzmddq01hgvxytsokvokp2	2024-06-28 17:49:03.443	2024-06-28 17:49:03.443	PERSON	clxyzm22n01fhvxyt6sxpj5mx	PENDING	2024-08-28 17:49:03.355	2024-07-13 17:49:03.355
clxyzmdeb01hmvxytxd2skfqb	clxyzmddq01hgvxytsokvokp2	2024-06-28 17:49:03.443	2024-06-28 17:49:03.443	COMPANY	clxyzm22y01fjvxyt593h3vlk	PENDING	2024-08-28 17:49:03.355	2024-07-13 17:49:03.355
clxyzmdeb01hnvxyth4858zh6	clxyzmddq01hgvxytsokvokp2	2024-06-28 17:49:03.443	2024-06-28 17:49:03.443	PERSON	clxyzm23701flvxyt85xqhcej	PENDING	2024-08-28 17:49:03.355	2024-07-13 17:49:03.355
clxyzmdeb01hovxytfjobl53u	clxyzmddq01hgvxytsokvokp2	2024-06-28 17:49:03.443	2024-06-28 17:49:03.443	COMPANY	clxyzm23j01fnvxyt262w6ni9	PENDING	2024-08-28 17:49:03.355	2024-07-13 17:49:03.355
clxyzmdet01htvxyt6z1r4cxa	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.461	2024-06-28 17:49:03.461	PERSON	clxyzm21y01fdvxyt1jp1azrq	REJECTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdet01huvxyte7wi8hyb	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.461	2024-06-28 17:49:03.461	COMPANY	clxyzm22d01ffvxyt0joev7hq	REJECTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdet01hvvxytlmnzjtlq	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.461	2024-06-28 17:49:03.461	PERSON	clxyzm22n01fhvxyt6sxpj5mx	REJECTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdet01hwvxytokp6wm8e	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.461	2024-06-28 17:49:03.461	COMPANY	clxyzm22y01fjvxyt593h3vlk	REJECTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdet01hxvxytg5ispkas	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.461	2024-06-28 17:49:03.461	PERSON	clxyzm23701flvxyt85xqhcej	REJECTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdet01hyvxyts192hhoa	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.461	2024-06-28 17:49:03.461	COMPANY	clxyzm23j01fnvxyt262w6ni9	REJECTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdew01i0vxythwszvxnf	clxyzmdep01hsvxyt9bu2l8m7	2024-06-28 17:49:03.464	2024-06-28 17:49:03.464	PERSON	clxyzmdek01hqvxyt6fmz9k4p	ACCEPTED	2024-07-28 17:49:03.355	2024-06-13 17:49:03.355
clxyzmdgw01itvxyt0i9xemco	clxyzmdgw01isvxytnx3h8ynk	2024-06-28 17:49:03.536	2024-06-28 17:49:03.536	PERSON	clxyzmdgw01ivvxytdaki4amk	ACCEPTED	2024-07-05 17:49:03.533	2024-06-28 17:49:03.533
\.


--
-- Data for Name: Progress; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Progress" (id, hours, description, "recruitmentId", "createdAt", "updatedAt", "endsAt", "startsAt", status, title) FROM stdin;
clxyzmdf001i1vxytco91xlhn	4	Revisión del estado de los equipos del laboratorio de la empresa.	clxyzmdew01i0vxythwszvxnf	2024-06-28 17:49:03.469	2024-06-28 17:49:03.469	2024-06-28 17:49:03.355	2024-06-27 17:49:03.355	PENDING	Revisión de equipos
clxyzmdf001i2vxytcou45hec	2	Monitoreo de las actividades del sistema de redes de la empresa.	clxyzmdew01i0vxythwszvxnf	2024-06-28 17:49:03.469	2024-06-28 17:49:03.469	2024-06-23 17:49:03.355	2024-06-23 17:49:03.355	REJECTED	Monitoreo de sistema
clxyzmdf001i3vxyt7r8u5m9k	10	Respaldo de 20 discos duros SATA pertenecientes a los clientes.	clxyzmdew01i0vxythwszvxnf	2024-06-28 17:49:03.469	2024-06-28 17:49:03.469	2024-06-21 17:49:03.355	2024-06-18 17:49:03.355	ACCEPTED	Respaldo de discos
clxyzmdf001i4vxyt7bjdlqwu	4	Actividades de mantenimiento y reparación de computadores y laptops.	clxyzmdew01i0vxythwszvxnf	2024-06-28 17:49:03.469	2024-06-28 17:49:03.469	2024-06-15 17:49:03.355	2024-06-15 17:49:03.355	ACCEPTED	Reparación de equipos
clxyzmdgx01iwvxytkedvbjoj	12	Análisis y discuciones de estrategias de marketing	clxyzmdgw01itvxyt0i9xemco	2024-06-28 17:49:03.536	2024-06-28 17:49:03.536	2024-06-29 17:49:03.533	2024-06-28 17:49:03.533	ACCEPTED	Registro de estrategias financieras
\.


--
-- Data for Name: Question; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Question" (id, content, answer, "contractId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Resets; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Resets" (id, "authUserId", "usedAt") FROM stdin;
\.


--
-- Data for Name: Subtask; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Subtask" (id, title, description, status, "taskId", "createdAt", "updatedAt") FROM stdin;
clxyzm1pz017mvxytisuy2tzy	Establecer un plan de contingencia para manejar situaciones imprevistas	Establecer un plan de contingencia para manejar situaciones imprevistas para tener un plan de acción en caso de que ocurran situaciones imprevistas	PENDING	clxyzm1p4016ovxytodp8437z	2024-06-28 17:48:48.311	2024-06-28 17:48:48.311
clxyzm1q7017ovxyta3nlotow	Realizar un análisis de costos y beneficios para evaluar si el proyecto es viable financieramente	Realizar un análisis de costos y beneficios para evaluar si el proyecto es viable financieramente para asegurarse de que el proyecto sea rentable	PENDING	clxyzm1p4016zvxytbnzbm6yp	2024-06-28 17:48:48.319	2024-06-28 17:48:48.319
clxyzm1qb017qvxyt4yjrcvim	Establecer plazos y fechas límite para cada tarea	Establecer plazos realistas y fechas límite para cada tarea para asegurarse de que se cumplan los plazos del proyecto	PROGRESS	clxyzm1p4015jvxytg9y02978	2024-06-28 17:48:48.323	2024-06-28 17:48:48.323
clxyzm1qe017svxythrgp6stc	Realizar reuniones de seguimiento periódicas para evaluar el progreso del proyecto y hacer ajustes si es necesario	Realizar reuniones de seguimiento periódicas para evaluar el progreso del proyecto y hacer ajustes si es necesario para asegurarse de que el proyecto esté avanzando según lo planeado	DONE	clxyzm1p3014jvxytd5pk3dy5	2024-06-28 17:48:48.327	2024-06-28 17:48:48.327
clxyzm1qi017uvxytvj0nbmh8	Establecer plazos y fechas límite para cada tarea	Establecer plazos realistas y fechas límite para cada tarea para asegurarse de que se cumplan los plazos del proyecto	DONE	clxyzm1p3014ovxytt77zlfs7	2024-06-28 17:48:48.33	2024-06-28 17:48:48.33
clxyzm1ql017wvxyt8hr96hwy	Establecer plazos y fechas límite para cada tarea	Establecer plazos realistas y fechas límite para cada tarea para asegurarse de que se cumplan los plazos del proyecto	PENDING	clxyzm1p4016uvxytsrpj7s34	2024-06-28 17:48:48.334	2024-06-28 17:48:48.334
clxyzm1qp017yvxytq0ybw05j	Documentar el proyecto para que sea fácil de entender y replicar en el futuro	Documentar el proyecto para que sea fácil de entender y replicar en el futuro para tener una referencia clara del proyecto	REVIEW	clxyzm1p4016fvxytsac71bwi	2024-06-28 17:48:48.337	2024-06-28 17:48:48.337
clxyzm1qs0180vxyt7ujgidhh	Asignar responsabilidades claras a cada miembro del equipo	Asignar responsabilidades claras a cada miembro del equipo para asegurarse de que cada tarea tenga un responsable	PROGRESS	clxyzm1p3014gvxytgvwpdxn8	2024-06-28 17:48:48.34	2024-06-28 17:48:48.34
clxyzm1qv0182vxyt3id1bupw	Actualizar y revisar el documento a medida que avanza el proyecto	Actualiza y revisa el documento a medida que avanza el proyecto para asegurarte de que estás en el buen camino y de que los objetivos se están cumpliendo.	REVIEW	clxyzm1p3013vvxytjple18py	2024-06-28 17:48:48.344	2024-06-28 17:48:48.344
clxyzm1qy0184vxytbk5hnvq3	Desarrollar una estrategia de marketing digital	Desarrolla una estrategia de marketing digital que incluya la publicidad en línea, el marketing por correo electrónico y las redes sociales. Asegúrate de que la estrategia sea coherente con los objetivos de marketing y que llegue a tu público objetivo.	PROGRESS	clxyzm1p3014zvxytuvqcke8b	2024-06-28 17:48:48.347	2024-06-28 17:48:48.347
clxyzm1r10186vxytqg9n0c1s	Asignar responsabilidades claras a cada miembro del equipo	Asignar responsabilidades claras a cada miembro del equipo para asegurarse de que cada tarea tenga un responsable	DONE	clxyzm1p3013tvxyt2dhjbow8	2024-06-28 17:48:48.35	2024-06-28 17:48:48.35
clxyzm1r50188vxytfar62io2	Establecer un plan de comunicación para mantener informados a todos los interesados en el proyecto	Establecer un plan de comunicación para mantener informados a todos los interesados en el proyecto para asegurarse de que todos estén al tanto del progreso del proyecto	PENDING	clxyzm1p4015tvxytvr4p5kra	2024-06-28 17:48:48.353	2024-06-28 17:48:48.353
clxyzm1r8018avxyth8801ose	Crear un análisis financiero detallado	Crea un análisis financiero detallado que incluya los ingresos, los gastos y las proyecciones financieras. Asegúrate de que el análisis sea realista y que tenga en cuenta todos los factores relevantes.	DONE	clxyzm1p3013qvxytwufh3klh	2024-06-28 17:48:48.356	2024-06-28 17:48:48.356
clxyzm1rb018cvxytmquv8i16	Definir los criterios que se utilizarán para evaluar el éxito del proyecto	Definir los criterios que se utilizarán para evaluar el éxito del proyecto para tener una medida clara del éxito del proyecto	PROGRESS	clxyzm1p4016lvxytchvro8ir	2024-06-28 17:48:48.359	2024-06-28 17:48:48.359
clxyzm1re018evxyt2jvrn5na	Realizar un análisis de impacto para evaluar cómo afectará el proyecto a la organización y a los interesados	Realizar un análisis de impacto para evaluar cómo afectará el proyecto a la organización y a los interesados para tener una comprensión clara de las implicaciones del proyecto	DONE	clxyzm1p3014mvxytkh2firmf	2024-06-28 17:48:48.362	2024-06-28 17:48:48.362
clxyzm1rh018gvxytvtqyb1f3	Definir objetivos específicos y medibles del proyecto	Definir los objetivos específicos y medibles del proyecto para tener una dirección clara y alcanzable	PROGRESS	clxyzm1p3013rvxytuyin5z4y	2024-06-28 17:48:48.366	2024-06-28 17:48:48.366
clxyzm1rl018ivxyt88j1n30k	Actualizar y revisar el documento a medida que avanza el proyecto	Actualiza y revisa el documento a medida que avanza el proyecto para asegurarte de que estás en el buen camino y de que los objetivos se están cumpliendo.	PENDING	clxyzm1p40152vxyt17er319r	2024-06-28 17:48:48.369	2024-06-28 17:48:48.369
clxyzm1ro018kvxytss34bmtt	Proporcionar a tus empleados las herramientas y los recursos necesarios para mejorar sus habilidades	Proporciona a tus empleados las herramientas y los recursos necesarios para mejorar sus habilidades. Asegúrate de que los empleados tengan acceso a la capacitación y a los recursos necesarios para mejorar sus habilidades y desempeñarse mejor en su trabajo.	PENDING	clxyzm1p40160vxytmc8wdkfo	2024-06-28 17:48:48.372	2024-06-28 17:48:48.372
clxyzm1rt018mvxytqc9mf8le	Asignar responsabilidades claras a cada miembro del equipo	Asignar responsabilidades claras a cada miembro del equipo para asegurarse de que cada tarea tenga un responsable	REVIEW	clxyzm1p40162vxytrg0q5ac9	2024-06-28 17:48:48.377	2024-06-28 17:48:48.377
clxyzm1rx018ovxyttma5j7vz	Realizar reuniones de seguimiento periódicas para evaluar el progreso del proyecto y hacer ajustes si es necesario	Realizar reuniones de seguimiento periódicas para evaluar el progreso del proyecto y hacer ajustes si es necesario para asegurarse de que el proyecto esté avanzando según lo planeado	PENDING	clxyzm1p4016jvxythapkadm9	2024-06-28 17:48:48.381	2024-06-28 17:48:48.381
clxyzm1s0018qvxytenz8rmxd	Establecer plazos y fechas límite para cada tarea	Establecer plazos realistas y fechas límite para cada tarea para asegurarse de que se cumplan los plazos del proyecto	PENDING	clxyzm1p3014ovxytt77zlfs7	2024-06-28 17:48:48.385	2024-06-28 17:48:48.385
clxyzm1s3018svxyt484fkpft	Definir objetivos específicos y medibles del proyecto	Definir los objetivos específicos y medibles del proyecto para tener una dirección clara y alcanzable	DONE	clxyzm1p3014vvxythb4qsdhz	2024-06-28 17:48:48.388	2024-06-28 17:48:48.388
clxyzm1s7018uvxytr6w0oc2t	Realizar pruebas y validaciones para asegurarse de que el proyecto cumpla con los requisitos	Realizar pruebas y validaciones para asegurarse de que el proyecto cumpla con los requisitos para asegurarse de que el proyecto cumpla con los estándares requeridos	REVIEW	clxyzm1p40168vxytrfwizij1	2024-06-28 17:48:48.391	2024-06-28 17:48:48.391
clxyzm1sa018wvxyt0pmlsta2	Realizar pruebas y validaciones para asegurarse de que el proyecto cumpla con los requisitos	Realizar pruebas y validaciones para asegurarse de que el proyecto cumpla con los requisitos para asegurarse de que el proyecto cumpla con los estándares requeridos	DONE	clxyzm1p4015svxyt7sccskjd	2024-06-28 17:48:48.394	2024-06-28 17:48:48.394
clxyzm1sc018yvxythowfxk43	Realizar un análisis de costos y beneficios para evaluar si el proyecto es viable financieramente	Realizar un análisis de costos y beneficios para evaluar si el proyecto es viable financieramente para asegurarse de que el proyecto sea rentable	PROGRESS	clxyzm1p4016tvxyt4lkg2qed	2024-06-28 17:48:48.397	2024-06-28 17:48:48.397
clxyzm1sg0190vxytaglfl3tu	Establecer plazos y fechas límite para cada tarea	Establecer plazos realistas y fechas límite para cada tarea para asegurarse de que se cumplan los plazos del proyecto	PROGRESS	clxyzm1p3014cvxyt10hi2c0k	2024-06-28 17:48:48.4	2024-06-28 17:48:48.4
clxyzm1sj0192vxytp7zzmxud	Establecer plazos y fechas límite para cada tarea	Establecer plazos realistas y fechas límite para cada tarea para asegurarse de que se cumplan los plazos del proyecto	DONE	clxyzm1p3013svxytts47wpzh	2024-06-28 17:48:48.403	2024-06-28 17:48:48.403
\.


--
-- Data for Name: Revision; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Revision" (id, "taskId", "subtaskId", "createdAt", "updatedAt", content) FROM stdin;
clxyzm1ve01d5vxyta7cym86t	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.507	2024-06-28 17:48:48.507	Se encontraron algunos problemas de rendimiento
clxyzm1vj01d7vxyt0943siz9	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.511	2024-06-28 17:48:48.511	La tarea se completó con éxito, pero se requiere más trabajo en la experiencia del usuario
clxyzm1vm01d9vxytx0nbdj5g	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.515	2024-06-28 17:48:48.515	Se requiere más trabajo en la localización
clxyzm1vq01dbvxyt3hs9xoty	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.518	2024-06-28 17:48:48.518	Se requiere más trabajo en la internacionalización
clxyzm1vv01ddvxytksht3v54	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.523	2024-06-28 17:48:48.523	Se requiere más trabajo en la accesibilidad
clxyzm1vy01dfvxyt2rfmbb4r	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.527	2024-06-28 17:48:48.527	La tarea se completó con éxito, pero se requiere más trabajo en la localización
clxyzm1w101dhvxytuhhc8gdu	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.53	2024-06-28 17:48:48.53	La tarea se completó con éxito, pero se requiere más trabajo en la localización
clxyzm1w401djvxytp05mlknx	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.532	2024-06-28 17:48:48.532	Se requiere más trabajo en la internacionalización
clxyzm1wa01dlvxyt7jv8ydc5	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.538	2024-06-28 17:48:48.538	La tarea se completó con éxito, pero se requiere más pruebas de compatibilidad
clxyzm1wf01dnvxytxwwm1hta	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.543	2024-06-28 17:48:48.543	La tarea se completó con éxito, pero se requiere más pruebas de seguridad
clxyzm1wi01dpvxytl6w7lnz9	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.546	2024-06-28 17:48:48.546	Se requiere más investigación para completar la tarea
clxyzm1wl01drvxyt2n64yg8w	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.549	2024-06-28 17:48:48.549	Se requiere más trabajo en la experiencia del usuario
clxyzm1wo01dtvxytogl5h37x	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.552	2024-06-28 17:48:48.552	Se requiere más trabajo en la experiencia del usuario
clxyzm1ws01dvvxyts7pklrjs	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.556	2024-06-28 17:48:48.556	Se requiere más trabajo en la internacionalización
clxyzm1ww01dxvxytsbevg49u	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.56	2024-06-28 17:48:48.56	La tarea se completó con éxito, pero se requiere más pruebas de compatibilidad
clxyzm1wz01dzvxytk392db4j	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.564	2024-06-28 17:48:48.564	Se requiere más trabajo en la experiencia del usuario
clxyzm1x301e1vxytw4bf27gz	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.567	2024-06-28 17:48:48.567	La tarea se completó con algunos errores
clxyzm1x701e3vxytnwid26c7	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.572	2024-06-28 17:48:48.572	La tarea se completó con éxito, pero se requiere más trabajo en la localización
clxyzm1xb01e5vxyt4441c2io	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.576	2024-06-28 17:48:48.576	Se requiere más información para completar la tarea
clxyzm1xe01e7vxyt8rh25bul	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.578	2024-06-28 17:48:48.578	Se requiere más trabajo en la documentación
clxyzm1xh01e9vxytgb8n01u2	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.581	2024-06-28 17:48:48.581	La tarea se completó con éxito, pero se requiere más trabajo en la experiencia del usuario
clxyzm1xn01ebvxyt54gqpgun	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.587	2024-06-28 17:48:48.587	La tarea se completó con éxito, pero se requiere más documentación
clxyzm1xq01edvxyt5u5yzt07	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.591	2024-06-28 17:48:48.591	La tarea se completó con éxito, pero se requiere más pruebas de compatibilidad
clxyzm1xu01efvxytr3lrjd4f	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.594	2024-06-28 17:48:48.594	La tarea se completó dentro del plazo
clxyzm1xw01ehvxyt8ln3by7g	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.597	2024-06-28 17:48:48.597	Se requiere más trabajo en las pruebas
clxyzm1y001ejvxytrvinivq1	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.6	2024-06-28 17:48:48.6	Se encontraron algunos problemas de seguridad
clxyzm1y601elvxytofm3diww	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.606	2024-06-28 17:48:48.606	Se requiere más investigación para completar la tarea
clxyzm1ya01envxytoyi9u729	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.61	2024-06-28 17:48:48.61	Se encontraron algunos problemas de rendimiento
clxyzm1yd01epvxytmbkm66xj	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.614	2024-06-28 17:48:48.614	La tarea se completó con éxito, pero se requiere más trabajo en la accesibilidad
clxyzm1yg01ervxyttox8k7ip	\N	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.617	2024-06-28 17:48:48.617	Se requiere más trabajo en la interfaz de usuario
\.


--
-- Data for Name: Skill; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Skill" (id, title, "createdAt", "updatedAt") FROM stdin;
clxyzlo0d00a9vxyt5kgtxp32	HTML	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00aavxytf4dcxvhk	CSS	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00abvxyt9pluf1d2	JavaScript	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00acvxyt28q2b6b9	React	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00advxytrgee52yv	Angular	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00aevxyt3m4e5i14	Vue	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00afvxytue8mdgoq	Svelte	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00agvxytm8lr4cjc	Node.js	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00ahvxytc0hv4shr	Express.js	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00aivxyt08r63ghr	MongoDB	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00ajvxytaxyx8d3h	MySQL	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00akvxytaxdelo7r	PostgreSQL	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00alvxytxn4jbi7x	Firebase	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00amvxyt3huwsoed	AWS	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00anvxytbb8giq5j	GCP	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00aovxyt0of4s697	Sistemas Operativos	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00apvxytz403baob	Hardware	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00aqvxyth7t8esjk	Docker	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00arvxyt8shq5380	Kubernetes	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00asvxytm0e696j1	Git	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00atvxyti2wzysr9	GitHub	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00auvxytfux34ld4	GitLab	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00avvxyt2krjzm6e	Jira	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00awvxytq5ghtsw3	Confluence	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00axvxyt4azdl75l	Slack	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00ayvxytvavpviai	Trello	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00azvxyt7j529yp6	Notion	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b0vxytjcynmgir	Figma	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b1vxytz2e2qwki	Sketch	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b2vxyt69obtwpd	Adobe Photoshop	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b3vxytw0d8livk	Adobe Illustrator	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b4vxytwxl4qndh	Adobe XD	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b5vxytmluk2jer	InVision	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b6vxyt21hlrrig	Zeplin	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b7vxytgok4mow6	Microsoft Office	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b8vxyt97tr92c7	Google Workspace	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00b9vxytwxu9n1k2	Linux	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0d00bavxyt0iuob4dy	Windows	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bbvxytno1g9906	MacOS	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bcvxyt8xaeah1k	Python	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bdvxytbk1emapi	Java	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bevxytyxx15e8f	C++	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bfvxyt3s4gmfeb	Swift	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bgvxytbbi73w9r	Kotlin	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bhvxyt6ir1fkl8	Oratoria	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bivxyt66x3afi1	Liderazgo	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bjvxyt247liadt	Gestión de proyectos	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bkvxyt56ma6fk8	Gestión del tiempo	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00blvxytrxfaegvo	Ventas	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bmvxytdxtiptr6	Marketing	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bnvxytgovw4y1e	Servicio al cliente	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bovxytgrdab7f9	Negociación	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bpvxytilfvvoli	Resolución de problemas	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bqvxyt1xgegtrh	Pensamiento crítico	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00brvxytzwhdivkc	Análisis de datos	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bsvxytffaj5h4e	Investigación	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00btvxyt1tthxznd	Enseñanza	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00buvxyt0joo83th	Entrenamiento	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bvvxyttgd31ejp	Planificación de eventos	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bwvxytw1zhcozw	Fotografía	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bxvxytfmr35m95	Cocina	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00byvxyt4425s9vr	Costura	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00bzvxyt0iqyw13f	Carpintería	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00c0vxytw09089ht	Jardinería	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00c1vxyt4gl2t3kj	Pintura	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00c2vxyt69tobgzb	Canto	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00c3vxyteq1q1g7c	Baile	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
clxyzlo0e00c4vxytnc2wdzha	Actuación	2024-06-28 17:48:30.541	2024-06-28 17:48:30.541
\.


--
-- Data for Name: Subparticipation; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."Subparticipation" (id, "personId", "subtaskId", "createdAt", "updatedAt") FROM stdin;
clxyzm1t40193vxyty65ug49p	clxyzlrho00djvxytzqntoe14	clxyzm1q7017ovxyta3nlotow	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t40194vxytwpawyf8h	clxyzlrho00djvxytzqntoe14	clxyzm1qb017qvxyt4yjrcvim	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t40195vxytda0xgobt	clxyzlos600dbvxytk7ukhabx	clxyzm1qb017qvxyt4yjrcvim	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t40196vxytuo0mylq5	clxyzlqca00dgvxytmb72d25h	clxyzm1qb017qvxyt4yjrcvim	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t40197vxytz9qkxfb2	clxyzlqop00dhvxyt9acxjypl	clxyzm1qi017uvxytvj0nbmh8	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t40198vxyt15jpqpnw	clxyzlpqe00devxyt9kk8uhnc	clxyzm1qi017uvxytvj0nbmh8	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t40199vxytdy2rznr9	clxyzlpqe00devxyt9kk8uhnc	clxyzm1qi017uvxytvj0nbmh8	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019avxytv9yabxy5	clxyzlp2e00dcvxytkej59ozk	clxyzm1qp017yvxytq0ybw05j	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019bvxyti5lemaj9	clxyzlr2900divxyt2lq0s5q5	clxyzm1qs0180vxyt7ujgidhh	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019cvxyto3zhu1ng	clxyzlpe100ddvxytbq5xl57h	clxyzm1qy0184vxytbk5hnvq3	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019dvxytj7iw7m69	clxyzlpqe00devxyt9kk8uhnc	clxyzm1qy0184vxytbk5hnvq3	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019evxytb8omn7j2	clxyzlpe100ddvxytbq5xl57h	clxyzm1qy0184vxytbk5hnvq3	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019fvxyt60rqd21h	clxyzlpe100ddvxytbq5xl57h	clxyzm1rl018ivxyt88j1n30k	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019gvxytud8710my	clxyzlpqe00devxyt9kk8uhnc	clxyzm1rl018ivxyt88j1n30k	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019hvxyt3kq2fcux	clxyzlos600dbvxytk7ukhabx	clxyzm1rl018ivxyt88j1n30k	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019ivxyty86ymmn1	clxyzlos600dbvxytk7ukhabx	clxyzm1ro018kvxytss34bmtt	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019jvxytkc6i1zkn	clxyzlr2900divxyt2lq0s5q5	clxyzm1ro018kvxytss34bmtt	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019kvxyt52fyebmq	clxyzlqca00dgvxytmb72d25h	clxyzm1ro018kvxytss34bmtt	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019lvxytf4dcyt7p	clxyzlrho00djvxytzqntoe14	clxyzm1s0018qvxytenz8rmxd	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019mvxytch47mdyq	clxyzlpqe00devxyt9kk8uhnc	clxyzm1s0018qvxytenz8rmxd	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019nvxyttccc0yy5	clxyzlp2e00dcvxytkej59ozk	clxyzm1s0018qvxytenz8rmxd	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019ovxytsyor1s19	clxyzlq0n00dfvxytllyse2tw	clxyzm1s3018svxyt484fkpft	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019pvxytq6rrjjy6	clxyzlq0n00dfvxytllyse2tw	clxyzm1sg0190vxytaglfl3tu	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019qvxytavrgpqu7	clxyzlojl00davxyti8hlue08	clxyzm1sg0190vxytaglfl3tu	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
clxyzm1t4019rvxyti5ykv2lz	clxyzlqca00dgvxytmb72d25h	clxyzm1sg0190vxytaglfl3tu	2024-06-28 17:48:48.424	2024-06-28 17:48:48.424
\.


--
-- Data for Name: _CategoryToInternship; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_CategoryToInternship" ("A", "B") FROM stdin;
clxyzlnwv0007vxytpaw22289	clxyzm1z201etvxytvlvu3od7
clxyzlnwv0008vxytkx5r6izw	clxyzm1z201etvxytvlvu3od7
clxyzlnwv000fvxytixcfhrem	clxyzm1z201etvxytvlvu3od7
clxyzlnwv000ovxytthod276a	clxyzm1z201etvxytvlvu3od7
clxyzlnwv000tvxytau91y7lo	clxyzm1z201etvxytvlvu3od7
clxyzlnwv000dvxytdznkyexe	clxyzm1za01evvxytylflcilt
clxyzlnwv000fvxytixcfhrem	clxyzm1za01evvxytylflcilt
clxyzlnwv000kvxyt1457znr9	clxyzm1za01evvxytylflcilt
clxyzlnwv000mvxytse8ywfpm	clxyzm1za01evvxytylflcilt
clxyzlnwv000svxytnd02a9wr	clxyzm1za01evvxytylflcilt
clxyzlnwv0000vxytw6wf0m79	clxyzm1zj01exvxytf9ddcrbt
clxyzlnwv0006vxyt9crrvzrw	clxyzm1zj01exvxytf9ddcrbt
clxyzlnwv000kvxyt1457znr9	clxyzm1zj01exvxytf9ddcrbt
clxyzlnwv000qvxytqjsusc3e	clxyzm1zj01exvxytf9ddcrbt
clxyzlnwv000wvxytpo4m0ksm	clxyzm1zj01exvxytf9ddcrbt
clxyzlnwv000nvxytkb81l232	clxyzm1zq01ezvxyt1ctlj96i
clxyzlnwv000ovxytthod276a	clxyzm1zq01ezvxyt1ctlj96i
clxyzlnwv000svxytnd02a9wr	clxyzm1zq01ezvxyt1ctlj96i
clxyzlnwv000uvxytpsjhdy0q	clxyzm1zq01ezvxyt1ctlj96i
clxyzlnwv000vvxyt77vwzdud	clxyzm1zq01ezvxyt1ctlj96i
clxyzlnwv0007vxytpaw22289	clxyzm1zv01f1vxytmrevdbb3
clxyzlnwv000evxyt3nf91qic	clxyzm1zv01f1vxytmrevdbb3
clxyzlnwv000jvxyt9opsyq53	clxyzm1zv01f1vxytmrevdbb3
clxyzlnwv000lvxytzr9kmkay	clxyzm1zv01f1vxytmrevdbb3
clxyzlnwv000wvxytpo4m0ksm	clxyzm1zv01f1vxytmrevdbb3
clxyzlnwv0000vxytw6wf0m79	clxyzm20401f3vxytqoyfpitf
clxyzlnwv0006vxyt9crrvzrw	clxyzm20401f3vxytqoyfpitf
clxyzlnwv0009vxytz8ell2f8	clxyzm20401f3vxytqoyfpitf
clxyzlnwv000kvxyt1457znr9	clxyzm20401f3vxytqoyfpitf
clxyzlnwv000rvxyt8rcjarwi	clxyzm20401f3vxytqoyfpitf
clxyzlnwv0001vxytzujuopr4	clxyzm20901f5vxyt0vqloeaw
clxyzlnwv0008vxytkx5r6izw	clxyzm20901f5vxyt0vqloeaw
clxyzlnwv000dvxytdznkyexe	clxyzm20901f5vxyt0vqloeaw
clxyzlnwv000nvxytkb81l232	clxyzm20901f5vxyt0vqloeaw
clxyzlnwv000qvxytqjsusc3e	clxyzm20901f5vxyt0vqloeaw
clxyzlnwv0001vxytzujuopr4	clxyzm20i01f7vxyt0epfusbd
clxyzlnwv000gvxyt462yh3cm	clxyzm20i01f7vxyt0epfusbd
clxyzlnwv000ovxytthod276a	clxyzm20i01f7vxyt0epfusbd
clxyzlnwv000qvxytqjsusc3e	clxyzm20i01f7vxyt0epfusbd
clxyzlnwv000wvxytpo4m0ksm	clxyzm20i01f7vxyt0epfusbd
clxyzlnwv0003vxytdicakj41	clxyzm20o01f9vxyt75ld938g
clxyzlnwv0009vxytz8ell2f8	clxyzm20o01f9vxyt75ld938g
clxyzlnwv000avxyt2qtxczdn	clxyzm20o01f9vxyt75ld938g
clxyzlnwv000nvxytkb81l232	clxyzm20o01f9vxyt75ld938g
clxyzlnwv000pvxyt5dd6swg3	clxyzm20o01f9vxyt75ld938g
clxyzlnwv000cvxytcn2v9wjz	clxyzm20s01fbvxytya4c8y8m
clxyzlnwv000lvxytzr9kmkay	clxyzm20s01fbvxytya4c8y8m
clxyzlnwv000pvxyt5dd6swg3	clxyzm20s01fbvxytya4c8y8m
clxyzlnwv000rvxyt8rcjarwi	clxyzm20s01fbvxytya4c8y8m
clxyzlnwv000tvxytau91y7lo	clxyzm20s01fbvxytya4c8y8m
clxyzlnwv0000vxytw6wf0m79	clxyzmdcv01h6vxyt98j22dmm
clxyzlnwv0001vxytzujuopr4	clxyzmdd701h8vxyte3oa4b9r
clxyzlnwv000lvxytzr9kmkay	clxyzmddq01hgvxytsokvokp2
clxyzlnwv000lvxytzr9kmkay	clxyzmdep01hsvxyt9bu2l8m7
clxyzlnwv0008vxytkx5r6izw	clxyzmdgw01isvxytnx3h8ynk
clxyzlnwv0009vxytz8ell2f8	clxyzmdgw01isvxytnx3h8ynk
clxyzlnwv000avxyt2qtxczdn	clxyzmdgw01isvxytnx3h8ynk
clxyzlnwv000bvxyt7k7uvmyb	clxyzmdgw01isvxytnx3h8ynk
clxyzlnwv000cvxytcn2v9wjz	clxyzmdgw01isvxytnx3h8ynk
\.


--
-- Data for Name: _CategoryToOffer; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_CategoryToOffer" ("A", "B") FROM stdin;
clxyzlnwv0000vxytw6wf0m79	clxyzm0rg00ftvxytotk91mj0
clxyzlnwv0001vxytzujuopr4	clxyzm0rg00ftvxytotk91mj0
clxyzlnwv0004vxytow9dmr9l	clxyzm0rg00ftvxytotk91mj0
clxyzlnwv0006vxyt9crrvzrw	clxyzm0rg00ftvxytotk91mj0
clxyzlnwv000fvxytixcfhrem	clxyzm0rg00ftvxytotk91mj0
clxyzlnwv000qvxytqjsusc3e	clxyzm0rg00ftvxytotk91mj0
clxyzlnwv0007vxytpaw22289	clxyzm0s000fvvxytr742mafv
clxyzlnwv000hvxytxg0ww15g	clxyzm0s000fvvxytr742mafv
clxyzlnwv000jvxyt9opsyq53	clxyzm0s000fvvxytr742mafv
clxyzlnwv000kvxyt1457znr9	clxyzm0s000fvvxytr742mafv
clxyzlnwv000tvxytau91y7lo	clxyzm0s000fvvxytr742mafv
clxyzlnwv000wvxytpo4m0ksm	clxyzm0s000fvvxytr742mafv
clxyzlnwv0001vxytzujuopr4	clxyzm0sd00fxvxytler2f3as
clxyzlnwv0002vxytyfgxrego	clxyzm0sd00fxvxytler2f3as
clxyzlnwv000jvxyt9opsyq53	clxyzm0sd00fxvxytler2f3as
clxyzlnwv000kvxyt1457znr9	clxyzm0sd00fxvxytler2f3as
clxyzlnwv000tvxytau91y7lo	clxyzm0sd00fxvxytler2f3as
clxyzlnwv000uvxytpsjhdy0q	clxyzm0sd00fxvxytler2f3as
clxyzlnwv0001vxytzujuopr4	clxyzm0sm00fzvxytr9yq4joe
clxyzlnwv0003vxytdicakj41	clxyzm0sm00fzvxytr9yq4joe
clxyzlnwv0007vxytpaw22289	clxyzm0sm00fzvxytr9yq4joe
clxyzlnwv000dvxytdznkyexe	clxyzm0sm00fzvxytr9yq4joe
clxyzlnwv000qvxytqjsusc3e	clxyzm0sm00fzvxytr9yq4joe
clxyzlnwv000rvxyt8rcjarwi	clxyzm0sm00fzvxytr9yq4joe
clxyzlnwv0000vxytw6wf0m79	clxyzm0sx00g1vxyt2fwyzyha
clxyzlnwv0007vxytpaw22289	clxyzm0sx00g1vxyt2fwyzyha
clxyzlnwv000ovxytthod276a	clxyzm0sx00g1vxyt2fwyzyha
clxyzlnwv000svxytnd02a9wr	clxyzm0sx00g1vxyt2fwyzyha
clxyzlnwv000tvxytau91y7lo	clxyzm0sx00g1vxyt2fwyzyha
clxyzlnwv000wvxytpo4m0ksm	clxyzm0sx00g1vxyt2fwyzyha
clxyzlnwv0005vxyt32bof0qq	clxyzm0t600g3vxytqpjtbecg
clxyzlnwv0006vxyt9crrvzrw	clxyzm0t600g3vxytqpjtbecg
clxyzlnwv000cvxytcn2v9wjz	clxyzm0t600g3vxytqpjtbecg
clxyzlnwv000fvxytixcfhrem	clxyzm0t600g3vxytqpjtbecg
clxyzlnwv000kvxyt1457znr9	clxyzm0t600g3vxytqpjtbecg
clxyzlnwv000rvxyt8rcjarwi	clxyzm0t600g3vxytqpjtbecg
clxyzlnwv0001vxytzujuopr4	clxyzm0tj00g5vxytlj2e0j02
clxyzlnwv0004vxytow9dmr9l	clxyzm0tj00g5vxytlj2e0j02
clxyzlnwv0007vxytpaw22289	clxyzm0tj00g5vxytlj2e0j02
clxyzlnwv000avxyt2qtxczdn	clxyzm0tj00g5vxytlj2e0j02
clxyzlnwv000pvxyt5dd6swg3	clxyzm0tj00g5vxytlj2e0j02
clxyzlnwv000uvxytpsjhdy0q	clxyzm0tj00g5vxytlj2e0j02
clxyzlnwv0006vxyt9crrvzrw	clxyzm0tw00g7vxythppmpci8
clxyzlnwv0008vxytkx5r6izw	clxyzm0tw00g7vxythppmpci8
clxyzlnwv000avxyt2qtxczdn	clxyzm0tw00g7vxythppmpci8
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0tw00g7vxythppmpci8
clxyzlnwv000hvxytxg0ww15g	clxyzm0tw00g7vxythppmpci8
clxyzlnwv000pvxyt5dd6swg3	clxyzm0tw00g7vxythppmpci8
clxyzlnwv0003vxytdicakj41	clxyzm0ua00g9vxyt7s0tmzsw
clxyzlnwv0004vxytow9dmr9l	clxyzm0ua00g9vxyt7s0tmzsw
clxyzlnwv0006vxyt9crrvzrw	clxyzm0ua00g9vxyt7s0tmzsw
clxyzlnwv000avxyt2qtxczdn	clxyzm0ua00g9vxyt7s0tmzsw
clxyzlnwv000lvxytzr9kmkay	clxyzm0ua00g9vxyt7s0tmzsw
clxyzlnwv000qvxytqjsusc3e	clxyzm0ua00g9vxyt7s0tmzsw
clxyzlnwv0000vxytw6wf0m79	clxyzm0ul00gbvxyty4udn3sd
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0ul00gbvxyty4udn3sd
clxyzlnwv000hvxytxg0ww15g	clxyzm0ul00gbvxyty4udn3sd
clxyzlnwv000rvxyt8rcjarwi	clxyzm0ul00gbvxyty4udn3sd
clxyzlnwv000svxytnd02a9wr	clxyzm0ul00gbvxyty4udn3sd
clxyzlnwv000tvxytau91y7lo	clxyzm0ul00gbvxyty4udn3sd
clxyzlnwv0001vxytzujuopr4	clxyzm0uw00gdvxytc59x5biq
clxyzlnwv0006vxyt9crrvzrw	clxyzm0uw00gdvxytc59x5biq
clxyzlnwv0007vxytpaw22289	clxyzm0uw00gdvxytc59x5biq
clxyzlnwv000dvxytdznkyexe	clxyzm0uw00gdvxytc59x5biq
clxyzlnwv000pvxyt5dd6swg3	clxyzm0uw00gdvxytc59x5biq
clxyzlnwv000uvxytpsjhdy0q	clxyzm0uw00gdvxytc59x5biq
clxyzlnwv0001vxytzujuopr4	clxyzm0v600gfvxyt0pv48avp
clxyzlnwv000avxyt2qtxczdn	clxyzm0v600gfvxyt0pv48avp
clxyzlnwv000jvxyt9opsyq53	clxyzm0v600gfvxyt0pv48avp
clxyzlnwv000kvxyt1457znr9	clxyzm0v600gfvxyt0pv48avp
clxyzlnwv000svxytnd02a9wr	clxyzm0v600gfvxyt0pv48avp
clxyzlnwv000wvxytpo4m0ksm	clxyzm0v600gfvxyt0pv48avp
clxyzlnwv0001vxytzujuopr4	clxyzm0vg00ghvxyttp7cdt7k
clxyzlnwv000dvxytdznkyexe	clxyzm0vg00ghvxyttp7cdt7k
clxyzlnwv000ovxytthod276a	clxyzm0vg00ghvxyttp7cdt7k
clxyzlnwv000qvxytqjsusc3e	clxyzm0vg00ghvxyttp7cdt7k
clxyzlnwv000svxytnd02a9wr	clxyzm0vg00ghvxyttp7cdt7k
clxyzlnwv000vvxyt77vwzdud	clxyzm0vg00ghvxyttp7cdt7k
clxyzlnwv0001vxytzujuopr4	clxyzm0vr00gjvxyty50ai2b3
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0vr00gjvxyty50ai2b3
clxyzlnwv000fvxytixcfhrem	clxyzm0vr00gjvxyty50ai2b3
clxyzlnwv000lvxytzr9kmkay	clxyzm0vr00gjvxyty50ai2b3
clxyzlnwv000ovxytthod276a	clxyzm0vr00gjvxyty50ai2b3
clxyzlnwv000svxytnd02a9wr	clxyzm0vr00gjvxyty50ai2b3
clxyzlnwv0004vxytow9dmr9l	clxyzm0w100glvxytyrcll71r
clxyzlnwv0008vxytkx5r6izw	clxyzm0w100glvxytyrcll71r
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0w100glvxytyrcll71r
clxyzlnwv000jvxyt9opsyq53	clxyzm0w100glvxytyrcll71r
clxyzlnwv000uvxytpsjhdy0q	clxyzm0w100glvxytyrcll71r
clxyzlnwv000wvxytpo4m0ksm	clxyzm0w100glvxytyrcll71r
clxyzlnwv0005vxyt32bof0qq	clxyzm0wf00gnvxytj4xqltl4
clxyzlnwv0007vxytpaw22289	clxyzm0wf00gnvxytj4xqltl4
clxyzlnwv000jvxyt9opsyq53	clxyzm0wf00gnvxytj4xqltl4
clxyzlnwv000pvxyt5dd6swg3	clxyzm0wf00gnvxytj4xqltl4
clxyzlnwv000uvxytpsjhdy0q	clxyzm0wf00gnvxytj4xqltl4
clxyzlnwv000vvxyt77vwzdud	clxyzm0wf00gnvxytj4xqltl4
clxyzlnwv0002vxytyfgxrego	clxyzm0wr00gpvxytqcwhx3w8
clxyzlnwv000avxyt2qtxczdn	clxyzm0wr00gpvxytqcwhx3w8
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0wr00gpvxytqcwhx3w8
clxyzlnwv000nvxytkb81l232	clxyzm0wr00gpvxytqcwhx3w8
clxyzlnwv000pvxyt5dd6swg3	clxyzm0wr00gpvxytqcwhx3w8
clxyzlnwv000svxytnd02a9wr	clxyzm0wr00gpvxytqcwhx3w8
clxyzlnwv000dvxytdznkyexe	clxyzm0x100grvxyt8g44cszd
clxyzlnwv000fvxytixcfhrem	clxyzm0x100grvxyt8g44cszd
clxyzlnwv000gvxyt462yh3cm	clxyzm0x100grvxyt8g44cszd
clxyzlnwv000nvxytkb81l232	clxyzm0x100grvxyt8g44cszd
clxyzlnwv000tvxytau91y7lo	clxyzm0x100grvxyt8g44cszd
clxyzlnwv000vvxyt77vwzdud	clxyzm0x100grvxyt8g44cszd
clxyzlnwv0004vxytow9dmr9l	clxyzm0xc00gtvxyt1i2fu4kh
clxyzlnwv0007vxytpaw22289	clxyzm0xc00gtvxyt1i2fu4kh
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0xc00gtvxyt1i2fu4kh
clxyzlnwv000pvxyt5dd6swg3	clxyzm0xc00gtvxyt1i2fu4kh
clxyzlnwv000qvxytqjsusc3e	clxyzm0xc00gtvxyt1i2fu4kh
clxyzlnwv000tvxytau91y7lo	clxyzm0xc00gtvxyt1i2fu4kh
clxyzlnwv0000vxytw6wf0m79	clxyzm0xl00gvvxyte287wygi
clxyzlnwv0005vxyt32bof0qq	clxyzm0xl00gvvxyte287wygi
clxyzlnwv0007vxytpaw22289	clxyzm0xl00gvvxyte287wygi
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0xl00gvvxyte287wygi
clxyzlnwv000kvxyt1457znr9	clxyzm0xl00gvvxyte287wygi
clxyzlnwv000wvxytpo4m0ksm	clxyzm0xl00gvvxyte287wygi
clxyzlnwv0002vxytyfgxrego	clxyzm0xv00gxvxytg5vqmij1
clxyzlnwv0003vxytdicakj41	clxyzm0xv00gxvxytg5vqmij1
clxyzlnwv000fvxytixcfhrem	clxyzm0xv00gxvxytg5vqmij1
clxyzlnwv000kvxyt1457znr9	clxyzm0xv00gxvxytg5vqmij1
clxyzlnwv000lvxytzr9kmkay	clxyzm0xv00gxvxytg5vqmij1
clxyzlnwv000xvxyt143ewbrn	clxyzm0xv00gxvxytg5vqmij1
clxyzlnwv0008vxytkx5r6izw	clxyzm0y500gzvxyt8zb7jprv
clxyzlnwv000fvxytixcfhrem	clxyzm0y500gzvxyt8zb7jprv
clxyzlnwv000gvxyt462yh3cm	clxyzm0y500gzvxyt8zb7jprv
clxyzlnwv000mvxytse8ywfpm	clxyzm0y500gzvxyt8zb7jprv
clxyzlnwv000nvxytkb81l232	clxyzm0y500gzvxyt8zb7jprv
clxyzlnwv000vvxyt77vwzdud	clxyzm0y500gzvxyt8zb7jprv
clxyzlnwv0003vxytdicakj41	clxyzm0yg00h1vxytfcn98ui2
clxyzlnwv000bvxyt7k7uvmyb	clxyzm0yg00h1vxytfcn98ui2
clxyzlnwv000evxyt3nf91qic	clxyzm0yg00h1vxytfcn98ui2
clxyzlnwv000hvxytxg0ww15g	clxyzm0yg00h1vxytfcn98ui2
clxyzlnwv000pvxyt5dd6swg3	clxyzm0yg00h1vxytfcn98ui2
clxyzlnwv000wvxytpo4m0ksm	clxyzm0yg00h1vxytfcn98ui2
clxyzlnwv0007vxytpaw22289	clxyzm0yp00h3vxyt883q0z82
clxyzlnwv0008vxytkx5r6izw	clxyzm0yp00h3vxyt883q0z82
clxyzlnwv000cvxytcn2v9wjz	clxyzm0yp00h3vxyt883q0z82
clxyzlnwv000evxyt3nf91qic	clxyzm0yp00h3vxyt883q0z82
clxyzlnwv000gvxyt462yh3cm	clxyzm0yp00h3vxyt883q0z82
clxyzlnwv000mvxytse8ywfpm	clxyzm0yp00h3vxyt883q0z82
clxyzlnwv0003vxytdicakj41	clxyzm0yy00h5vxyt2qqru2ly
clxyzlnwv0009vxytz8ell2f8	clxyzm0yy00h5vxyt2qqru2ly
clxyzlnwv000fvxytixcfhrem	clxyzm0yy00h5vxyt2qqru2ly
clxyzlnwv000ovxytthod276a	clxyzm0yy00h5vxyt2qqru2ly
clxyzlnwv000tvxytau91y7lo	clxyzm0yy00h5vxyt2qqru2ly
clxyzlnwv000vvxyt77vwzdud	clxyzm0yy00h5vxyt2qqru2ly
clxyzlnwv000avxyt2qtxczdn	clxyzm0za00h7vxytlmlchb5t
clxyzlnwv000jvxyt9opsyq53	clxyzm0za00h7vxytlmlchb5t
clxyzlnwv000kvxyt1457znr9	clxyzm0za00h7vxytlmlchb5t
clxyzlnwv000qvxytqjsusc3e	clxyzm0za00h7vxytlmlchb5t
clxyzlnwv000tvxytau91y7lo	clxyzm0za00h7vxytlmlchb5t
clxyzlnwv000wvxytpo4m0ksm	clxyzm0za00h7vxytlmlchb5t
clxyzlnwv0004vxytow9dmr9l	clxyzm0zo00h9vxyt3sxv2ug3
clxyzlnwv0005vxyt32bof0qq	clxyzm0zo00h9vxyt3sxv2ug3
clxyzlnwv000hvxytxg0ww15g	clxyzm0zo00h9vxyt3sxv2ug3
clxyzlnwv000lvxytzr9kmkay	clxyzm0zo00h9vxyt3sxv2ug3
clxyzlnwv000mvxytse8ywfpm	clxyzm0zo00h9vxyt3sxv2ug3
clxyzlnwv000tvxytau91y7lo	clxyzm0zo00h9vxyt3sxv2ug3
clxyzlnwv0000vxytw6wf0m79	clxyzm10500hbvxythmshdmha
clxyzlnwv0008vxytkx5r6izw	clxyzm10500hbvxythmshdmha
clxyzlnwv000bvxyt7k7uvmyb	clxyzm10500hbvxythmshdmha
clxyzlnwv000dvxytdznkyexe	clxyzm10500hbvxythmshdmha
clxyzlnwv000fvxytixcfhrem	clxyzm10500hbvxythmshdmha
clxyzlnwv000hvxytxg0ww15g	clxyzm10500hbvxythmshdmha
clxyzlnwv0004vxytow9dmr9l	clxyzm10n00hdvxytpv1bq5ij
clxyzlnwv000hvxytxg0ww15g	clxyzm10n00hdvxytpv1bq5ij
clxyzlnwv000jvxyt9opsyq53	clxyzm10n00hdvxytpv1bq5ij
clxyzlnwv000lvxytzr9kmkay	clxyzm10n00hdvxytpv1bq5ij
clxyzlnwv000ovxytthod276a	clxyzm10n00hdvxytpv1bq5ij
clxyzlnwv000xvxyt143ewbrn	clxyzm10n00hdvxytpv1bq5ij
clxyzlnwv0000vxytw6wf0m79	clxyzm10w00hfvxytijlgu8rl
clxyzlnwv000jvxyt9opsyq53	clxyzm10w00hfvxytijlgu8rl
clxyzlnwv000lvxytzr9kmkay	clxyzm10w00hfvxytijlgu8rl
clxyzlnwv000ovxytthod276a	clxyzm10w00hfvxytijlgu8rl
clxyzlnwv000rvxyt8rcjarwi	clxyzm10w00hfvxytijlgu8rl
clxyzlnwv000vvxyt77vwzdud	clxyzm10w00hfvxytijlgu8rl
clxyzlnwv0000vxytw6wf0m79	clxyzm11400hhvxytdnqzmtn6
clxyzlnwv000bvxyt7k7uvmyb	clxyzm11400hhvxytdnqzmtn6
clxyzlnwv000hvxytxg0ww15g	clxyzm11400hhvxytdnqzmtn6
clxyzlnwv000jvxyt9opsyq53	clxyzm11400hhvxytdnqzmtn6
clxyzlnwv000ovxytthod276a	clxyzm11400hhvxytdnqzmtn6
clxyzlnwv000svxytnd02a9wr	clxyzm11400hhvxytdnqzmtn6
clxyzlnwv0003vxytdicakj41	clxyzm11a00hjvxytrw6nirf7
clxyzlnwv0007vxytpaw22289	clxyzm11a00hjvxytrw6nirf7
clxyzlnwv0008vxytkx5r6izw	clxyzm11a00hjvxytrw6nirf7
clxyzlnwv000cvxytcn2v9wjz	clxyzm11a00hjvxytrw6nirf7
clxyzlnwv000tvxytau91y7lo	clxyzm11a00hjvxytrw6nirf7
clxyzlnwv000uvxytpsjhdy0q	clxyzm11a00hjvxytrw6nirf7
clxyzlnwv0006vxyt9crrvzrw	clxyzm11h00hlvxytyjoczcbm
clxyzlnwv000gvxyt462yh3cm	clxyzm11h00hlvxytyjoczcbm
clxyzlnwv000ivxyt4gph1usx	clxyzm11h00hlvxytyjoczcbm
clxyzlnwv000lvxytzr9kmkay	clxyzm11h00hlvxytyjoczcbm
clxyzlnwv000nvxytkb81l232	clxyzm11h00hlvxytyjoczcbm
clxyzlnwv000rvxyt8rcjarwi	clxyzm11h00hlvxytyjoczcbm
clxyzlnwv0006vxyt9crrvzrw	clxyzm11r00hnvxytk7ft3am9
clxyzlnwv0008vxytkx5r6izw	clxyzm11r00hnvxytk7ft3am9
clxyzlnwv000avxyt2qtxczdn	clxyzm11r00hnvxytk7ft3am9
clxyzlnwv000fvxytixcfhrem	clxyzm11r00hnvxytk7ft3am9
clxyzlnwv000kvxyt1457znr9	clxyzm11r00hnvxytk7ft3am9
clxyzlnwv000ovxytthod276a	clxyzm11r00hnvxytk7ft3am9
clxyzlnwv000bvxyt7k7uvmyb	clxyzm12200hpvxyttont8euy
clxyzlnwv000hvxytxg0ww15g	clxyzm12200hpvxyttont8euy
clxyzlnwv000nvxytkb81l232	clxyzm12200hpvxyttont8euy
clxyzlnwv000pvxyt5dd6swg3	clxyzm12200hpvxyttont8euy
clxyzlnwv000svxytnd02a9wr	clxyzm12200hpvxyttont8euy
clxyzlnwv000uvxytpsjhdy0q	clxyzm12200hpvxyttont8euy
clxyzlnwv0004vxytow9dmr9l	clxyzm12j00hrvxyt3xotb7ts
clxyzlnwv0006vxyt9crrvzrw	clxyzm12j00hrvxyt3xotb7ts
clxyzlnwv000dvxytdznkyexe	clxyzm12j00hrvxyt3xotb7ts
clxyzlnwv000lvxytzr9kmkay	clxyzm12j00hrvxyt3xotb7ts
clxyzlnwv000wvxytpo4m0ksm	clxyzm12j00hrvxyt3xotb7ts
clxyzlnwv000xvxyt143ewbrn	clxyzm12j00hrvxyt3xotb7ts
clxyzlnwv0005vxyt32bof0qq	clxyzm12s00htvxytfclkdj8t
clxyzlnwv0009vxytz8ell2f8	clxyzm12s00htvxytfclkdj8t
clxyzlnwv000cvxytcn2v9wjz	clxyzm12s00htvxytfclkdj8t
clxyzlnwv000hvxytxg0ww15g	clxyzm12s00htvxytfclkdj8t
clxyzlnwv000vvxyt77vwzdud	clxyzm12s00htvxytfclkdj8t
clxyzlnwv000xvxyt143ewbrn	clxyzm12s00htvxytfclkdj8t
clxyzlnwv0007vxytpaw22289	clxyzm13100hvvxytma3rqw1g
clxyzlnwv000cvxytcn2v9wjz	clxyzm13100hvvxytma3rqw1g
clxyzlnwv000dvxytdznkyexe	clxyzm13100hvvxytma3rqw1g
clxyzlnwv000kvxyt1457znr9	clxyzm13100hvvxytma3rqw1g
clxyzlnwv000lvxytzr9kmkay	clxyzm13100hvvxytma3rqw1g
clxyzlnwv000nvxytkb81l232	clxyzm13100hvvxytma3rqw1g
clxyzlnwv000avxyt2qtxczdn	clxyzm13i00hxvxytm0070m9m
clxyzlnwv000mvxytse8ywfpm	clxyzm13i00hxvxytm0070m9m
clxyzlnwv000qvxytqjsusc3e	clxyzm13i00hxvxytm0070m9m
clxyzlnwv000svxytnd02a9wr	clxyzm13i00hxvxytm0070m9m
clxyzlnwv000uvxytpsjhdy0q	clxyzm13i00hxvxytm0070m9m
clxyzlnwv000vvxyt77vwzdud	clxyzm13i00hxvxytm0070m9m
clxyzlnwv0005vxyt32bof0qq	clxyzm13p00hzvxyt32pr6h9w
clxyzlnwv0008vxytkx5r6izw	clxyzm13p00hzvxyt32pr6h9w
clxyzlnwv000avxyt2qtxczdn	clxyzm13p00hzvxyt32pr6h9w
clxyzlnwv000gvxyt462yh3cm	clxyzm13p00hzvxyt32pr6h9w
clxyzlnwv000nvxytkb81l232	clxyzm13p00hzvxyt32pr6h9w
clxyzlnwv000uvxytpsjhdy0q	clxyzm13p00hzvxyt32pr6h9w
clxyzlnwv0003vxytdicakj41	clxyzm13y00i1vxyt9f6c948d
clxyzlnwv0005vxyt32bof0qq	clxyzm13y00i1vxyt9f6c948d
clxyzlnwv0009vxytz8ell2f8	clxyzm13y00i1vxyt9f6c948d
clxyzlnwv000pvxyt5dd6swg3	clxyzm13y00i1vxyt9f6c948d
clxyzlnwv000rvxyt8rcjarwi	clxyzm13y00i1vxyt9f6c948d
clxyzlnwv000xvxyt143ewbrn	clxyzm13y00i1vxyt9f6c948d
clxyzlnwv0008vxytkx5r6izw	clxyzm14k00i3vxytju8p75gx
clxyzlnwv000avxyt2qtxczdn	clxyzm14k00i3vxytju8p75gx
clxyzlnwv000bvxyt7k7uvmyb	clxyzm14k00i3vxytju8p75gx
clxyzlnwv000tvxytau91y7lo	clxyzm14k00i3vxytju8p75gx
clxyzlnwv000uvxytpsjhdy0q	clxyzm14k00i3vxytju8p75gx
clxyzlnwv000wvxytpo4m0ksm	clxyzm14k00i3vxytju8p75gx
clxyzlnwv0003vxytdicakj41	clxyzm14v00i5vxyt6nwalxfw
clxyzlnwv000bvxyt7k7uvmyb	clxyzm14v00i5vxyt6nwalxfw
clxyzlnwv000dvxytdznkyexe	clxyzm14v00i5vxyt6nwalxfw
clxyzlnwv000gvxyt462yh3cm	clxyzm14v00i5vxyt6nwalxfw
clxyzlnwv000pvxyt5dd6swg3	clxyzm14v00i5vxyt6nwalxfw
clxyzlnwv000tvxytau91y7lo	clxyzm14v00i5vxyt6nwalxfw
clxyzlnwv000avxyt2qtxczdn	clxyzmdhu01j3vxytk9e9j5fq
clxyzlnwv000pvxyt5dd6swg3	clxyzmdhu01j3vxytk9e9j5fq
clxyzlnwv000tvxytau91y7lo	clxyzmdhu01j3vxytk9e9j5fq
clxyzlnwv0001vxytzujuopr4	clxyzmdi201javxyt4294oxwb
clxyzlnwv000avxyt2qtxczdn	clxyzmdi201javxyt4294oxwb
clxyzlnwv000bvxyt7k7uvmyb	clxyzmdi201javxyt4294oxwb
clxyzlnwv0001vxytzujuopr4	clxyzmdi801jcvxytwk0byvuy
clxyzlnwv000avxyt2qtxczdn	clxyzmdi801jcvxytwk0byvuy
clxyzlnwv000pvxyt5dd6swg3	clxyzmdi801jcvxytwk0byvuy
\.


--
-- Data for Name: _CategoryToPerson; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_CategoryToPerson" ("A", "B") FROM stdin;
clxyzlnwv0009vxytz8ell2f8	clxyzlojl00davxyti8hlue08
clxyzlnwv000gvxyt462yh3cm	clxyzlojl00davxyti8hlue08
clxyzlnwv000jvxyt9opsyq53	clxyzlojl00davxyti8hlue08
clxyzlnwv000nvxytkb81l232	clxyzlojl00davxyti8hlue08
clxyzlnwv000xvxyt143ewbrn	clxyzlojl00davxyti8hlue08
clxyzlnwv0001vxytzujuopr4	clxyzlos600dbvxytk7ukhabx
clxyzlnwv000avxyt2qtxczdn	clxyzlos600dbvxytk7ukhabx
clxyzlnwv000bvxyt7k7uvmyb	clxyzlos600dbvxytk7ukhabx
clxyzlnwv000pvxyt5dd6swg3	clxyzlos600dbvxytk7ukhabx
clxyzlnwv000tvxytau91y7lo	clxyzlos600dbvxytk7ukhabx
clxyzlnwv0000vxytw6wf0m79	clxyzlp2e00dcvxytkej59ozk
clxyzlnwv0001vxytzujuopr4	clxyzlp2e00dcvxytkej59ozk
clxyzlnwv0004vxytow9dmr9l	clxyzlp2e00dcvxytkej59ozk
clxyzlnwv0008vxytkx5r6izw	clxyzlp2e00dcvxytkej59ozk
clxyzlnwv0009vxytz8ell2f8	clxyzlp2e00dcvxytkej59ozk
clxyzlnwv0006vxyt9crrvzrw	clxyzlpe100ddvxytbq5xl57h
clxyzlnwv000evxyt3nf91qic	clxyzlpe100ddvxytbq5xl57h
clxyzlnwv000hvxytxg0ww15g	clxyzlpe100ddvxytbq5xl57h
clxyzlnwv000nvxytkb81l232	clxyzlpe100ddvxytbq5xl57h
clxyzlnwv000svxytnd02a9wr	clxyzlpe100ddvxytbq5xl57h
clxyzlnwv0000vxytw6wf0m79	clxyzlpqe00devxyt9kk8uhnc
clxyzlnwv000cvxytcn2v9wjz	clxyzlpqe00devxyt9kk8uhnc
clxyzlnwv000mvxytse8ywfpm	clxyzlpqe00devxyt9kk8uhnc
clxyzlnwv000nvxytkb81l232	clxyzlpqe00devxyt9kk8uhnc
clxyzlnwv000rvxyt8rcjarwi	clxyzlpqe00devxyt9kk8uhnc
clxyzlnwv0002vxytyfgxrego	clxyzlq0n00dfvxytllyse2tw
clxyzlnwv000cvxytcn2v9wjz	clxyzlq0n00dfvxytllyse2tw
clxyzlnwv000nvxytkb81l232	clxyzlq0n00dfvxytllyse2tw
clxyzlnwv000tvxytau91y7lo	clxyzlq0n00dfvxytllyse2tw
clxyzlnwv000wvxytpo4m0ksm	clxyzlq0n00dfvxytllyse2tw
clxyzlnwv000evxyt3nf91qic	clxyzlqca00dgvxytmb72d25h
clxyzlnwv000gvxyt462yh3cm	clxyzlqca00dgvxytmb72d25h
clxyzlnwv000kvxyt1457znr9	clxyzlqca00dgvxytmb72d25h
clxyzlnwv000nvxytkb81l232	clxyzlqca00dgvxytmb72d25h
clxyzlnwv000uvxytpsjhdy0q	clxyzlqca00dgvxytmb72d25h
clxyzlnwv0009vxytz8ell2f8	clxyzlqop00dhvxyt9acxjypl
clxyzlnwv000evxyt3nf91qic	clxyzlqop00dhvxyt9acxjypl
clxyzlnwv000fvxytixcfhrem	clxyzlqop00dhvxyt9acxjypl
clxyzlnwv000jvxyt9opsyq53	clxyzlqop00dhvxyt9acxjypl
clxyzlnwv000vvxyt77vwzdud	clxyzlqop00dhvxyt9acxjypl
clxyzlnwv0003vxytdicakj41	clxyzlr2900divxyt2lq0s5q5
clxyzlnwv0008vxytkx5r6izw	clxyzlr2900divxyt2lq0s5q5
clxyzlnwv000dvxytdznkyexe	clxyzlr2900divxyt2lq0s5q5
clxyzlnwv000jvxyt9opsyq53	clxyzlr2900divxyt2lq0s5q5
clxyzlnwv000vvxyt77vwzdud	clxyzlr2900divxyt2lq0s5q5
clxyzlnwv0002vxytyfgxrego	clxyzlrho00djvxytzqntoe14
clxyzlnwv000hvxytxg0ww15g	clxyzlrho00djvxytzqntoe14
clxyzlnwv000kvxyt1457znr9	clxyzlrho00djvxytzqntoe14
clxyzlnwv000wvxytpo4m0ksm	clxyzlrho00djvxytzqntoe14
clxyzlnwv000xvxyt143ewbrn	clxyzlrho00djvxytzqntoe14
\.


--
-- Data for Name: _CategoryToProject; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_CategoryToProject" ("A", "B") FROM stdin;
clxyzlnwv000avxyt2qtxczdn	clxyzm1ie00x1vxytp6ybtfoe
clxyzlnwv000cvxytcn2v9wjz	clxyzm1ie00x1vxytp6ybtfoe
clxyzlnwv000evxyt3nf91qic	clxyzm1ie00x1vxytp6ybtfoe
clxyzlnwv000kvxyt1457znr9	clxyzm1ie00x1vxytp6ybtfoe
clxyzlnwv000uvxytpsjhdy0q	clxyzm1ie00x1vxytp6ybtfoe
clxyzlnwv000fvxytixcfhrem	clxyzm1im00x3vxyt22ngu580
clxyzlnwv000jvxyt9opsyq53	clxyzm1im00x3vxyt22ngu580
clxyzlnwv000lvxytzr9kmkay	clxyzm1im00x3vxyt22ngu580
clxyzlnwv000nvxytkb81l232	clxyzm1im00x3vxyt22ngu580
clxyzlnwv000vvxyt77vwzdud	clxyzm1im00x3vxyt22ngu580
clxyzlnwv0002vxytyfgxrego	clxyzm1iq00x5vxyt6wi3plrx
clxyzlnwv0006vxyt9crrvzrw	clxyzm1iq00x5vxyt6wi3plrx
clxyzlnwv0007vxytpaw22289	clxyzm1iq00x5vxyt6wi3plrx
clxyzlnwv000cvxytcn2v9wjz	clxyzm1iq00x5vxyt6wi3plrx
clxyzlnwv000vvxyt77vwzdud	clxyzm1iq00x5vxyt6wi3plrx
clxyzlnwv0003vxytdicakj41	clxyzm1iv00x7vxyt63qjbudo
clxyzlnwv0004vxytow9dmr9l	clxyzm1iv00x7vxyt63qjbudo
clxyzlnwv000dvxytdznkyexe	clxyzm1iv00x7vxyt63qjbudo
clxyzlnwv000ovxytthod276a	clxyzm1iv00x7vxyt63qjbudo
clxyzlnwv000xvxyt143ewbrn	clxyzm1iv00x7vxyt63qjbudo
clxyzlnwv0007vxytpaw22289	clxyzm1iz00x9vxyth6vowsev
clxyzlnwv0008vxytkx5r6izw	clxyzm1iz00x9vxyth6vowsev
clxyzlnwv000fvxytixcfhrem	clxyzm1iz00x9vxyth6vowsev
clxyzlnwv000kvxyt1457znr9	clxyzm1iz00x9vxyth6vowsev
clxyzlnwv000svxytnd02a9wr	clxyzm1iz00x9vxyth6vowsev
clxyzlnwv0002vxytyfgxrego	clxyzm1j400xbvxyt2acull9f
clxyzlnwv0003vxytdicakj41	clxyzm1j400xbvxyt2acull9f
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1j400xbvxyt2acull9f
clxyzlnwv000evxyt3nf91qic	clxyzm1j400xbvxyt2acull9f
clxyzlnwv000rvxyt8rcjarwi	clxyzm1j400xbvxyt2acull9f
clxyzlnwv0009vxytz8ell2f8	clxyzm1j900xdvxyt6pluiw9m
clxyzlnwv000pvxyt5dd6swg3	clxyzm1j900xdvxyt6pluiw9m
clxyzlnwv000uvxytpsjhdy0q	clxyzm1j900xdvxyt6pluiw9m
clxyzlnwv000vvxyt77vwzdud	clxyzm1j900xdvxyt6pluiw9m
clxyzlnwv000xvxyt143ewbrn	clxyzm1j900xdvxyt6pluiw9m
clxyzlnwv0001vxytzujuopr4	clxyzm1je00xfvxyteyvc91i0
clxyzlnwv0004vxytow9dmr9l	clxyzm1je00xfvxyteyvc91i0
clxyzlnwv0007vxytpaw22289	clxyzm1je00xfvxyteyvc91i0
clxyzlnwv000gvxyt462yh3cm	clxyzm1je00xfvxyteyvc91i0
clxyzlnwv000svxytnd02a9wr	clxyzm1je00xfvxyteyvc91i0
clxyzlnwv0005vxyt32bof0qq	clxyzm1jl00xhvxyt57mxcfd1
clxyzlnwv0009vxytz8ell2f8	clxyzm1jl00xhvxyt57mxcfd1
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1jl00xhvxyt57mxcfd1
clxyzlnwv000pvxyt5dd6swg3	clxyzm1jl00xhvxyt57mxcfd1
clxyzlnwv000qvxytqjsusc3e	clxyzm1jl00xhvxyt57mxcfd1
clxyzlnwv0003vxytdicakj41	clxyzm1jp00xjvxyt444pri0d
clxyzlnwv0004vxytow9dmr9l	clxyzm1jp00xjvxyt444pri0d
clxyzlnwv0005vxyt32bof0qq	clxyzm1jp00xjvxyt444pri0d
clxyzlnwv000dvxytdznkyexe	clxyzm1jp00xjvxyt444pri0d
clxyzlnwv000vvxyt77vwzdud	clxyzm1jp00xjvxyt444pri0d
clxyzlnwv0000vxytw6wf0m79	clxyzm1jt00xlvxytvkx889a9
clxyzlnwv0006vxyt9crrvzrw	clxyzm1jt00xlvxytvkx889a9
clxyzlnwv000avxyt2qtxczdn	clxyzm1jt00xlvxytvkx889a9
clxyzlnwv000ovxytthod276a	clxyzm1jt00xlvxytvkx889a9
clxyzlnwv000svxytnd02a9wr	clxyzm1jt00xlvxytvkx889a9
clxyzlnwv0001vxytzujuopr4	clxyzm1jy00xnvxytz7shzd1e
clxyzlnwv0006vxyt9crrvzrw	clxyzm1jy00xnvxytz7shzd1e
clxyzlnwv000kvxyt1457znr9	clxyzm1jy00xnvxytz7shzd1e
clxyzlnwv000pvxyt5dd6swg3	clxyzm1jy00xnvxytz7shzd1e
clxyzlnwv000qvxytqjsusc3e	clxyzm1jy00xnvxytz7shzd1e
clxyzlnwv0005vxyt32bof0qq	clxyzm1k200xpvxyt6f4ay2gw
clxyzlnwv000avxyt2qtxczdn	clxyzm1k200xpvxyt6f4ay2gw
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1k200xpvxyt6f4ay2gw
clxyzlnwv000gvxyt462yh3cm	clxyzm1k200xpvxyt6f4ay2gw
clxyzlnwv000hvxytxg0ww15g	clxyzm1k200xpvxyt6f4ay2gw
clxyzlnwv0000vxytw6wf0m79	clxyzm1k700xrvxytypx4k8f0
clxyzlnwv0003vxytdicakj41	clxyzm1k700xrvxytypx4k8f0
clxyzlnwv0009vxytz8ell2f8	clxyzm1k700xrvxytypx4k8f0
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1k700xrvxytypx4k8f0
clxyzlnwv000ovxytthod276a	clxyzm1k700xrvxytypx4k8f0
clxyzlnwv0000vxytw6wf0m79	clxyzm1kc00xtvxytxg4fb6k1
clxyzlnwv0002vxytyfgxrego	clxyzm1kc00xtvxytxg4fb6k1
clxyzlnwv000avxyt2qtxczdn	clxyzm1kc00xtvxytxg4fb6k1
clxyzlnwv000gvxyt462yh3cm	clxyzm1kc00xtvxytxg4fb6k1
clxyzlnwv000kvxyt1457znr9	clxyzm1kc00xtvxytxg4fb6k1
clxyzlnwv0002vxytyfgxrego	clxyzm1ki00xvvxytuscmxddb
clxyzlnwv0006vxyt9crrvzrw	clxyzm1ki00xvvxytuscmxddb
clxyzlnwv000evxyt3nf91qic	clxyzm1ki00xvvxytuscmxddb
clxyzlnwv000mvxytse8ywfpm	clxyzm1ki00xvvxytuscmxddb
clxyzlnwv000tvxytau91y7lo	clxyzm1ki00xvvxytuscmxddb
clxyzlnwv000evxyt3nf91qic	clxyzm1kt00xxvxyt6xdlddsb
clxyzlnwv000hvxytxg0ww15g	clxyzm1kt00xxvxyt6xdlddsb
clxyzlnwv000kvxyt1457znr9	clxyzm1kt00xxvxyt6xdlddsb
clxyzlnwv000mvxytse8ywfpm	clxyzm1kt00xxvxyt6xdlddsb
clxyzlnwv000wvxytpo4m0ksm	clxyzm1kt00xxvxyt6xdlddsb
clxyzlnwv0002vxytyfgxrego	clxyzm1ky00xzvxytlgwetvvp
clxyzlnwv0005vxyt32bof0qq	clxyzm1ky00xzvxytlgwetvvp
clxyzlnwv000pvxyt5dd6swg3	clxyzm1ky00xzvxytlgwetvvp
clxyzlnwv000vvxyt77vwzdud	clxyzm1ky00xzvxytlgwetvvp
clxyzlnwv000wvxytpo4m0ksm	clxyzm1ky00xzvxytlgwetvvp
clxyzlnwv0004vxytow9dmr9l	clxyzm1l500y1vxytx1xruj4u
clxyzlnwv000fvxytixcfhrem	clxyzm1l500y1vxytx1xruj4u
clxyzlnwv000ovxytthod276a	clxyzm1l500y1vxytx1xruj4u
clxyzlnwv000uvxytpsjhdy0q	clxyzm1l500y1vxytx1xruj4u
clxyzlnwv000wvxytpo4m0ksm	clxyzm1l500y1vxytx1xruj4u
clxyzlnwv0005vxyt32bof0qq	clxyzm1ld00y3vxytu4rw695z
clxyzlnwv000cvxytcn2v9wjz	clxyzm1ld00y3vxytu4rw695z
clxyzlnwv000evxyt3nf91qic	clxyzm1ld00y3vxytu4rw695z
clxyzlnwv000uvxytpsjhdy0q	clxyzm1ld00y3vxytu4rw695z
clxyzlnwv000vvxyt77vwzdud	clxyzm1ld00y3vxytu4rw695z
clxyzlnwv000avxyt2qtxczdn	clxyzm1lk00y5vxytglvcl87o
clxyzlnwv000cvxytcn2v9wjz	clxyzm1lk00y5vxytglvcl87o
clxyzlnwv000svxytnd02a9wr	clxyzm1lk00y5vxytglvcl87o
clxyzlnwv000tvxytau91y7lo	clxyzm1lk00y5vxytglvcl87o
clxyzlnwv000xvxyt143ewbrn	clxyzm1lk00y5vxytglvcl87o
clxyzlnwv000jvxyt9opsyq53	clxyzm1lp00y7vxyt94ntj2nc
clxyzlnwv000nvxytkb81l232	clxyzm1lp00y7vxyt94ntj2nc
clxyzlnwv000pvxyt5dd6swg3	clxyzm1lp00y7vxyt94ntj2nc
clxyzlnwv000uvxytpsjhdy0q	clxyzm1lp00y7vxyt94ntj2nc
clxyzlnwv000xvxyt143ewbrn	clxyzm1lp00y7vxyt94ntj2nc
clxyzlnwv0001vxytzujuopr4	clxyzm1lw00y9vxytsk1am69l
clxyzlnwv0005vxyt32bof0qq	clxyzm1lw00y9vxytsk1am69l
clxyzlnwv0007vxytpaw22289	clxyzm1lw00y9vxytsk1am69l
clxyzlnwv000cvxytcn2v9wjz	clxyzm1lw00y9vxytsk1am69l
clxyzlnwv000svxytnd02a9wr	clxyzm1lw00y9vxytsk1am69l
clxyzlnwv0004vxytow9dmr9l	clxyzm1m300ybvxytmsu41l26
clxyzlnwv0008vxytkx5r6izw	clxyzm1m300ybvxytmsu41l26
clxyzlnwv000evxyt3nf91qic	clxyzm1m300ybvxytmsu41l26
clxyzlnwv000jvxyt9opsyq53	clxyzm1m300ybvxytmsu41l26
clxyzlnwv000uvxytpsjhdy0q	clxyzm1m300ybvxytmsu41l26
clxyzlnwv0000vxytw6wf0m79	clxyzm1ma00ydvxytexdoagwx
clxyzlnwv0002vxytyfgxrego	clxyzm1ma00ydvxytexdoagwx
clxyzlnwv000evxyt3nf91qic	clxyzm1ma00ydvxytexdoagwx
clxyzlnwv000gvxyt462yh3cm	clxyzm1ma00ydvxytexdoagwx
clxyzlnwv000ivxyt4gph1usx	clxyzm1ma00ydvxytexdoagwx
clxyzlnwv0001vxytzujuopr4	clxyzm1mg00yfvxytk4qbftkg
clxyzlnwv0006vxyt9crrvzrw	clxyzm1mg00yfvxytk4qbftkg
clxyzlnwv0007vxytpaw22289	clxyzm1mg00yfvxytk4qbftkg
clxyzlnwv000ivxyt4gph1usx	clxyzm1mg00yfvxytk4qbftkg
clxyzlnwv000vvxyt77vwzdud	clxyzm1mg00yfvxytk4qbftkg
clxyzlnwv0002vxytyfgxrego	clxyzm1mm00yhvxytcx60skms
clxyzlnwv000gvxyt462yh3cm	clxyzm1mm00yhvxytcx60skms
clxyzlnwv000jvxyt9opsyq53	clxyzm1mm00yhvxytcx60skms
clxyzlnwv000kvxyt1457znr9	clxyzm1mm00yhvxytcx60skms
clxyzlnwv000vvxyt77vwzdud	clxyzm1mm00yhvxytcx60skms
clxyzlnwv0002vxytyfgxrego	clxyzm1mr00yjvxytoxij5o16
clxyzlnwv000cvxytcn2v9wjz	clxyzm1mr00yjvxytoxij5o16
clxyzlnwv000nvxytkb81l232	clxyzm1mr00yjvxytoxij5o16
clxyzlnwv000ovxytthod276a	clxyzm1mr00yjvxytoxij5o16
clxyzlnwv000rvxyt8rcjarwi	clxyzm1mr00yjvxytoxij5o16
clxyzlnwv0000vxytw6wf0m79	clxyzm1mx00ylvxyt8dlx9c60
clxyzlnwv000lvxytzr9kmkay	clxyzm1mx00ylvxyt8dlx9c60
clxyzlnwv000tvxytau91y7lo	clxyzm1mx00ylvxyt8dlx9c60
clxyzlnwv000uvxytpsjhdy0q	clxyzm1mx00ylvxyt8dlx9c60
clxyzlnwv000wvxytpo4m0ksm	clxyzm1mx00ylvxyt8dlx9c60
clxyzlnwv0003vxytdicakj41	clxyzm1n200ynvxytmzffh7rj
clxyzlnwv0005vxyt32bof0qq	clxyzm1n200ynvxytmzffh7rj
clxyzlnwv000jvxyt9opsyq53	clxyzm1n200ynvxytmzffh7rj
clxyzlnwv000nvxytkb81l232	clxyzm1n200ynvxytmzffh7rj
clxyzlnwv000wvxytpo4m0ksm	clxyzm1n200ynvxytmzffh7rj
clxyzlnwv0008vxytkx5r6izw	clxyzmdfv01i5vxyty60ei96q
clxyzlnwv0009vxytz8ell2f8	clxyzmdfv01i5vxyty60ei96q
clxyzlnwv000avxyt2qtxczdn	clxyzmdfv01i5vxyty60ei96q
clxyzlnwv000bvxyt7k7uvmyb	clxyzmdfv01i5vxyty60ei96q
clxyzlnwv000cvxytcn2v9wjz	clxyzmdfv01i5vxyty60ei96q
\.


--
-- Data for Name: _CategoryToTeam; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_CategoryToTeam" ("A", "B") FROM stdin;
clxyzlnwv0005vxyt32bof0qq	clxyzm16m00i9vxythmrvqj2e
clxyzlnwv0007vxytpaw22289	clxyzm16m00i9vxythmrvqj2e
clxyzlnwv000gvxyt462yh3cm	clxyzm16m00i9vxythmrvqj2e
clxyzlnwv000hvxytxg0ww15g	clxyzm16m00i9vxythmrvqj2e
clxyzlnwv000uvxytpsjhdy0q	clxyzm16m00i9vxythmrvqj2e
clxyzlnwv000cvxytcn2v9wjz	clxyzm16x00idvxytxr6o7dpp
clxyzlnwv000evxyt3nf91qic	clxyzm16x00idvxytxr6o7dpp
clxyzlnwv000hvxytxg0ww15g	clxyzm16x00idvxytxr6o7dpp
clxyzlnwv000ivxyt4gph1usx	clxyzm16x00idvxytxr6o7dpp
clxyzlnwv000uvxytpsjhdy0q	clxyzm16x00idvxytxr6o7dpp
clxyzlnwv0001vxytzujuopr4	clxyzm17b00ihvxytzqegtjtm
clxyzlnwv0004vxytow9dmr9l	clxyzm17b00ihvxytzqegtjtm
clxyzlnwv0006vxyt9crrvzrw	clxyzm17b00ihvxytzqegtjtm
clxyzlnwv000svxytnd02a9wr	clxyzm17b00ihvxytzqegtjtm
clxyzlnwv000tvxytau91y7lo	clxyzm17b00ihvxytzqegtjtm
clxyzlnwv0001vxytzujuopr4	clxyzm17l00ilvxyt8k9fak8y
clxyzlnwv000bvxyt7k7uvmyb	clxyzm17l00ilvxyt8k9fak8y
clxyzlnwv000qvxytqjsusc3e	clxyzm17l00ilvxyt8k9fak8y
clxyzlnwv000rvxyt8rcjarwi	clxyzm17l00ilvxyt8k9fak8y
clxyzlnwv000vvxyt77vwzdud	clxyzm17l00ilvxyt8k9fak8y
clxyzlnwv000avxyt2qtxczdn	clxyzm17t00ipvxytohxs43nb
clxyzlnwv000evxyt3nf91qic	clxyzm17t00ipvxytohxs43nb
clxyzlnwv000rvxyt8rcjarwi	clxyzm17t00ipvxytohxs43nb
clxyzlnwv000svxytnd02a9wr	clxyzm17t00ipvxytohxs43nb
clxyzlnwv000vvxyt77vwzdud	clxyzm17t00ipvxytohxs43nb
clxyzlnwv0005vxyt32bof0qq	clxyzm18100itvxytbnxjb5bm
clxyzlnwv0006vxyt9crrvzrw	clxyzm18100itvxytbnxjb5bm
clxyzlnwv000dvxytdznkyexe	clxyzm18100itvxytbnxjb5bm
clxyzlnwv000jvxyt9opsyq53	clxyzm18100itvxytbnxjb5bm
clxyzlnwv000qvxytqjsusc3e	clxyzm18100itvxytbnxjb5bm
clxyzlnwv0006vxyt9crrvzrw	clxyzm18900ixvxyt4bjkpf5g
clxyzlnwv000fvxytixcfhrem	clxyzm18900ixvxyt4bjkpf5g
clxyzlnwv000qvxytqjsusc3e	clxyzm18900ixvxyt4bjkpf5g
clxyzlnwv000rvxyt8rcjarwi	clxyzm18900ixvxyt4bjkpf5g
clxyzlnwv000uvxytpsjhdy0q	clxyzm18900ixvxyt4bjkpf5g
clxyzlnwv0002vxytyfgxrego	clxyzm18i00j1vxytdwlmgb1r
clxyzlnwv0004vxytow9dmr9l	clxyzm18i00j1vxytdwlmgb1r
clxyzlnwv000evxyt3nf91qic	clxyzm18i00j1vxytdwlmgb1r
clxyzlnwv000lvxytzr9kmkay	clxyzm18i00j1vxytdwlmgb1r
clxyzlnwv000pvxyt5dd6swg3	clxyzm18i00j1vxytdwlmgb1r
clxyzlnwv0003vxytdicakj41	clxyzm18t00j5vxytsfyntlx2
clxyzlnwv0008vxytkx5r6izw	clxyzm18t00j5vxytsfyntlx2
clxyzlnwv000cvxytcn2v9wjz	clxyzm18t00j5vxytsfyntlx2
clxyzlnwv000svxytnd02a9wr	clxyzm18t00j5vxytsfyntlx2
clxyzlnwv000tvxytau91y7lo	clxyzm18t00j5vxytsfyntlx2
clxyzlnwv0001vxytzujuopr4	clxyzm19600j9vxytn2vhxwvb
clxyzlnwv0002vxytyfgxrego	clxyzm19600j9vxytn2vhxwvb
clxyzlnwv0003vxytdicakj41	clxyzm19600j9vxytn2vhxwvb
clxyzlnwv0004vxytow9dmr9l	clxyzm19600j9vxytn2vhxwvb
clxyzlnwv000bvxyt7k7uvmyb	clxyzm19600j9vxytn2vhxwvb
clxyzlnwv0002vxytyfgxrego	clxyzm19g00jdvxytp5un25iu
clxyzlnwv0005vxyt32bof0qq	clxyzm19g00jdvxytp5un25iu
clxyzlnwv000avxyt2qtxczdn	clxyzm19g00jdvxytp5un25iu
clxyzlnwv000mvxytse8ywfpm	clxyzm19g00jdvxytp5un25iu
clxyzlnwv000xvxyt143ewbrn	clxyzm19g00jdvxytp5un25iu
clxyzlnwv0008vxytkx5r6izw	clxyzm19t00jhvxytyuemro8o
clxyzlnwv000cvxytcn2v9wjz	clxyzm19t00jhvxytyuemro8o
clxyzlnwv000ovxytthod276a	clxyzm19t00jhvxytyuemro8o
clxyzlnwv000uvxytpsjhdy0q	clxyzm19t00jhvxytyuemro8o
clxyzlnwv000vvxyt77vwzdud	clxyzm19t00jhvxytyuemro8o
clxyzlnwv0003vxytdicakj41	clxyzm1a300jlvxytn37finp1
clxyzlnwv0009vxytz8ell2f8	clxyzm1a300jlvxytn37finp1
clxyzlnwv000avxyt2qtxczdn	clxyzm1a300jlvxytn37finp1
clxyzlnwv000nvxytkb81l232	clxyzm1a300jlvxytn37finp1
clxyzlnwv000ovxytthod276a	clxyzm1a300jlvxytn37finp1
clxyzlnwv000fvxytixcfhrem	clxyzm1ad00jpvxytp10hyo1b
clxyzlnwv000ivxyt4gph1usx	clxyzm1ad00jpvxytp10hyo1b
clxyzlnwv000kvxyt1457znr9	clxyzm1ad00jpvxytp10hyo1b
clxyzlnwv000ovxytthod276a	clxyzm1ad00jpvxytp10hyo1b
clxyzlnwv000svxytnd02a9wr	clxyzm1ad00jpvxytp10hyo1b
clxyzlnwv0003vxytdicakj41	clxyzm1an00jtvxytj50zdtdm
clxyzlnwv000cvxytcn2v9wjz	clxyzm1an00jtvxytj50zdtdm
clxyzlnwv000gvxyt462yh3cm	clxyzm1an00jtvxytj50zdtdm
clxyzlnwv000ivxyt4gph1usx	clxyzm1an00jtvxytj50zdtdm
clxyzlnwv000svxytnd02a9wr	clxyzm1an00jtvxytj50zdtdm
clxyzlnwv0004vxytow9dmr9l	clxyzm1b100jxvxytjjozs8iw
clxyzlnwv000evxyt3nf91qic	clxyzm1b100jxvxytjjozs8iw
clxyzlnwv000gvxyt462yh3cm	clxyzm1b100jxvxytjjozs8iw
clxyzlnwv000kvxyt1457znr9	clxyzm1b100jxvxytjjozs8iw
clxyzlnwv000qvxytqjsusc3e	clxyzm1b100jxvxytjjozs8iw
clxyzlnwv0008vxytkx5r6izw	clxyzm1bc00k1vxythwp6bqzv
clxyzlnwv0009vxytz8ell2f8	clxyzm1bc00k1vxythwp6bqzv
clxyzlnwv000gvxyt462yh3cm	clxyzm1bc00k1vxythwp6bqzv
clxyzlnwv000ivxyt4gph1usx	clxyzm1bc00k1vxythwp6bqzv
clxyzlnwv000rvxyt8rcjarwi	clxyzm1bc00k1vxythwp6bqzv
clxyzlnwv0001vxytzujuopr4	clxyzm1bn00k5vxytrvk1em0c
clxyzlnwv0005vxyt32bof0qq	clxyzm1bn00k5vxytrvk1em0c
clxyzlnwv0007vxytpaw22289	clxyzm1bn00k5vxytrvk1em0c
clxyzlnwv000qvxytqjsusc3e	clxyzm1bn00k5vxytrvk1em0c
clxyzlnwv000wvxytpo4m0ksm	clxyzm1bn00k5vxytrvk1em0c
clxyzlnwv0000vxytw6wf0m79	clxyzm1bx00k9vxytf5ztgmch
clxyzlnwv000gvxyt462yh3cm	clxyzm1bx00k9vxytf5ztgmch
clxyzlnwv000hvxytxg0ww15g	clxyzm1bx00k9vxytf5ztgmch
clxyzlnwv000pvxyt5dd6swg3	clxyzm1bx00k9vxytf5ztgmch
clxyzlnwv000vvxyt77vwzdud	clxyzm1bx00k9vxytf5ztgmch
clxyzlnwv0008vxytkx5r6izw	clxyzm1c500kdvxyt2oj431y3
clxyzlnwv000ovxytthod276a	clxyzm1c500kdvxyt2oj431y3
clxyzlnwv000qvxytqjsusc3e	clxyzm1c500kdvxyt2oj431y3
clxyzlnwv000rvxyt8rcjarwi	clxyzm1c500kdvxyt2oj431y3
clxyzlnwv000tvxytau91y7lo	clxyzm1c500kdvxyt2oj431y3
clxyzlnwv0004vxytow9dmr9l	clxyzm1ce00khvxytas5nlo30
clxyzlnwv000avxyt2qtxczdn	clxyzm1ce00khvxytas5nlo30
clxyzlnwv000jvxyt9opsyq53	clxyzm1ce00khvxytas5nlo30
clxyzlnwv000qvxytqjsusc3e	clxyzm1ce00khvxytas5nlo30
clxyzlnwv000uvxytpsjhdy0q	clxyzm1ce00khvxytas5nlo30
clxyzlnwv0008vxytkx5r6izw	clxyzm1cm00klvxytbju084d0
clxyzlnwv000fvxytixcfhrem	clxyzm1cm00klvxytbju084d0
clxyzlnwv000pvxyt5dd6swg3	clxyzm1cm00klvxytbju084d0
clxyzlnwv000rvxyt8rcjarwi	clxyzm1cm00klvxytbju084d0
clxyzlnwv000svxytnd02a9wr	clxyzm1cm00klvxytbju084d0
clxyzlnwv0003vxytdicakj41	clxyzm1cu00kpvxytmau1mbxt
clxyzlnwv0006vxyt9crrvzrw	clxyzm1cu00kpvxytmau1mbxt
clxyzlnwv000fvxytixcfhrem	clxyzm1cu00kpvxytmau1mbxt
clxyzlnwv000rvxyt8rcjarwi	clxyzm1cu00kpvxytmau1mbxt
clxyzlnwv000vvxyt77vwzdud	clxyzm1cu00kpvxytmau1mbxt
clxyzlnwv0003vxytdicakj41	clxyzm1d100ktvxytetp8thye
clxyzlnwv0005vxyt32bof0qq	clxyzm1d100ktvxytetp8thye
clxyzlnwv000evxyt3nf91qic	clxyzm1d100ktvxytetp8thye
clxyzlnwv000vvxyt77vwzdud	clxyzm1d100ktvxytetp8thye
clxyzlnwv000wvxytpo4m0ksm	clxyzm1d100ktvxytetp8thye
clxyzlnwv0006vxyt9crrvzrw	clxyzm1da00kxvxyt5yxsg1i0
clxyzlnwv000avxyt2qtxczdn	clxyzm1da00kxvxyt5yxsg1i0
clxyzlnwv000dvxytdznkyexe	clxyzm1da00kxvxyt5yxsg1i0
clxyzlnwv000mvxytse8ywfpm	clxyzm1da00kxvxyt5yxsg1i0
clxyzlnwv000tvxytau91y7lo	clxyzm1da00kxvxyt5yxsg1i0
clxyzlnwv000dvxytdznkyexe	clxyzm1dh00l1vxythyt2r4k8
clxyzlnwv000jvxyt9opsyq53	clxyzm1dh00l1vxythyt2r4k8
clxyzlnwv000lvxytzr9kmkay	clxyzm1dh00l1vxythyt2r4k8
clxyzlnwv000ovxytthod276a	clxyzm1dh00l1vxythyt2r4k8
clxyzlnwv000svxytnd02a9wr	clxyzm1dh00l1vxythyt2r4k8
clxyzlnwv0000vxytw6wf0m79	clxyzm1dq00l5vxyt246v7476
clxyzlnwv000fvxytixcfhrem	clxyzm1dq00l5vxyt246v7476
clxyzlnwv000jvxyt9opsyq53	clxyzm1dq00l5vxyt246v7476
clxyzlnwv000vvxyt77vwzdud	clxyzm1dq00l5vxyt246v7476
clxyzlnwv000xvxyt143ewbrn	clxyzm1dq00l5vxyt246v7476
clxyzlnwv0007vxytpaw22289	clxyzm1dx00l9vxyt8h1njd12
clxyzlnwv0009vxytz8ell2f8	clxyzm1dx00l9vxyt8h1njd12
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1dx00l9vxyt8h1njd12
clxyzlnwv000evxyt3nf91qic	clxyzm1dx00l9vxyt8h1njd12
clxyzlnwv000kvxyt1457znr9	clxyzm1dx00l9vxyt8h1njd12
clxyzlnwv0000vxytw6wf0m79	clxyzm1ea00ldvxytaohqtznr
clxyzlnwv0004vxytow9dmr9l	clxyzm1ea00ldvxytaohqtznr
clxyzlnwv0005vxyt32bof0qq	clxyzm1ea00ldvxytaohqtznr
clxyzlnwv000fvxytixcfhrem	clxyzm1ea00ldvxytaohqtznr
clxyzlnwv000nvxytkb81l232	clxyzm1ea00ldvxytaohqtznr
clxyzlnwv0000vxytw6wf0m79	clxyzm1ej00lhvxyt1nk5vme7
clxyzlnwv0001vxytzujuopr4	clxyzm1ej00lhvxyt1nk5vme7
clxyzlnwv0007vxytpaw22289	clxyzm1ej00lhvxyt1nk5vme7
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1ej00lhvxyt1nk5vme7
clxyzlnwv000jvxyt9opsyq53	clxyzm1ej00lhvxyt1nk5vme7
clxyzlnwv0004vxytow9dmr9l	clxyzm1er00llvxytctcj2t6x
clxyzlnwv0006vxyt9crrvzrw	clxyzm1er00llvxytctcj2t6x
clxyzlnwv0008vxytkx5r6izw	clxyzm1er00llvxytctcj2t6x
clxyzlnwv000bvxyt7k7uvmyb	clxyzm1er00llvxytctcj2t6x
clxyzlnwv000evxyt3nf91qic	clxyzm1er00llvxytctcj2t6x
clxyzlnwv0008vxytkx5r6izw	clxyzm1f000lpvxytu7f23rwa
clxyzlnwv000hvxytxg0ww15g	clxyzm1f000lpvxytu7f23rwa
clxyzlnwv000ivxyt4gph1usx	clxyzm1f000lpvxytu7f23rwa
clxyzlnwv000ovxytthod276a	clxyzm1f000lpvxytu7f23rwa
clxyzlnwv000xvxyt143ewbrn	clxyzm1f000lpvxytu7f23rwa
clxyzlnwv0008vxytkx5r6izw	clxyzmdfv01i6vxyt5q0brwd5
clxyzlnwv0009vxytz8ell2f8	clxyzmdfv01i6vxyt5q0brwd5
clxyzlnwv000avxyt2qtxczdn	clxyzmdfv01i6vxyt5q0brwd5
clxyzlnwv000bvxyt7k7uvmyb	clxyzmdfv01i6vxyt5q0brwd5
clxyzlnwv000cvxytcn2v9wjz	clxyzmdfv01i6vxyt5q0brwd5
\.


--
-- Data for Name: _CategoryToVacant; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_CategoryToVacant" ("A", "B") FROM stdin;
clxyzlnwv0008vxytkx5r6izw	clxyzm21y01fdvxyt1jp1azrq
clxyzlnwv000fvxytixcfhrem	clxyzm21y01fdvxyt1jp1azrq
clxyzlnwv000mvxytse8ywfpm	clxyzm21y01fdvxyt1jp1azrq
clxyzlnwv000pvxyt5dd6swg3	clxyzm21y01fdvxyt1jp1azrq
clxyzlnwv000uvxytpsjhdy0q	clxyzm21y01fdvxyt1jp1azrq
clxyzlnwv0000vxytw6wf0m79	clxyzm22d01ffvxyt0joev7hq
clxyzlnwv0005vxyt32bof0qq	clxyzm22d01ffvxyt0joev7hq
clxyzlnwv000evxyt3nf91qic	clxyzm22d01ffvxyt0joev7hq
clxyzlnwv000gvxyt462yh3cm	clxyzm22d01ffvxyt0joev7hq
clxyzlnwv000ivxyt4gph1usx	clxyzm22d01ffvxyt0joev7hq
clxyzlnwv0009vxytz8ell2f8	clxyzm22n01fhvxyt6sxpj5mx
clxyzlnwv000avxyt2qtxczdn	clxyzm22n01fhvxyt6sxpj5mx
clxyzlnwv000hvxytxg0ww15g	clxyzm22n01fhvxyt6sxpj5mx
clxyzlnwv000svxytnd02a9wr	clxyzm22n01fhvxyt6sxpj5mx
clxyzlnwv000xvxyt143ewbrn	clxyzm22n01fhvxyt6sxpj5mx
clxyzlnwv0000vxytw6wf0m79	clxyzm22y01fjvxyt593h3vlk
clxyzlnwv0002vxytyfgxrego	clxyzm22y01fjvxyt593h3vlk
clxyzlnwv0009vxytz8ell2f8	clxyzm22y01fjvxyt593h3vlk
clxyzlnwv000ivxyt4gph1usx	clxyzm22y01fjvxyt593h3vlk
clxyzlnwv000xvxyt143ewbrn	clxyzm22y01fjvxyt593h3vlk
clxyzlnwv0000vxytw6wf0m79	clxyzm23701flvxyt85xqhcej
clxyzlnwv0004vxytow9dmr9l	clxyzm23701flvxyt85xqhcej
clxyzlnwv0008vxytkx5r6izw	clxyzm23701flvxyt85xqhcej
clxyzlnwv000ovxytthod276a	clxyzm23701flvxyt85xqhcej
clxyzlnwv000svxytnd02a9wr	clxyzm23701flvxyt85xqhcej
clxyzlnwv0001vxytzujuopr4	clxyzm23j01fnvxyt262w6ni9
clxyzlnwv0007vxytpaw22289	clxyzm23j01fnvxyt262w6ni9
clxyzlnwv0009vxytz8ell2f8	clxyzm23j01fnvxyt262w6ni9
clxyzlnwv000fvxytixcfhrem	clxyzm23j01fnvxyt262w6ni9
clxyzlnwv000kvxyt1457znr9	clxyzm23j01fnvxyt262w6ni9
clxyzlnwv0001vxytzujuopr4	clxyzm23x01fpvxytue9bcdwo
clxyzlnwv0006vxyt9crrvzrw	clxyzm23x01fpvxytue9bcdwo
clxyzlnwv000evxyt3nf91qic	clxyzm23x01fpvxytue9bcdwo
clxyzlnwv000lvxytzr9kmkay	clxyzm23x01fpvxytue9bcdwo
clxyzlnwv000rvxyt8rcjarwi	clxyzm23x01fpvxytue9bcdwo
clxyzlnwv0003vxytdicakj41	clxyzm24a01frvxyt7nvd86is
clxyzlnwv0004vxytow9dmr9l	clxyzm24a01frvxyt7nvd86is
clxyzlnwv000jvxyt9opsyq53	clxyzm24a01frvxyt7nvd86is
clxyzlnwv000kvxyt1457znr9	clxyzm24a01frvxyt7nvd86is
clxyzlnwv000lvxytzr9kmkay	clxyzm24a01frvxyt7nvd86is
clxyzlnwv0002vxytyfgxrego	clxyzm24m01ftvxytbwo56nyd
clxyzlnwv0006vxyt9crrvzrw	clxyzm24m01ftvxytbwo56nyd
clxyzlnwv000hvxytxg0ww15g	clxyzm24m01ftvxytbwo56nyd
clxyzlnwv000qvxytqjsusc3e	clxyzm24m01ftvxytbwo56nyd
clxyzlnwv000tvxytau91y7lo	clxyzm24m01ftvxytbwo56nyd
clxyzlnwv0003vxytdicakj41	clxyzm24v01fvvxyt1ixuhon7
clxyzlnwv0006vxyt9crrvzrw	clxyzm24v01fvvxyt1ixuhon7
clxyzlnwv0008vxytkx5r6izw	clxyzm24v01fvvxyt1ixuhon7
clxyzlnwv000bvxyt7k7uvmyb	clxyzm24v01fvvxyt1ixuhon7
clxyzlnwv000tvxytau91y7lo	clxyzm24v01fvvxyt1ixuhon7
clxyzlnwv000avxyt2qtxczdn	clxyzm25501fxvxyt57o8ts5v
clxyzlnwv000evxyt3nf91qic	clxyzm25501fxvxyt57o8ts5v
clxyzlnwv000fvxytixcfhrem	clxyzm25501fxvxyt57o8ts5v
clxyzlnwv000tvxytau91y7lo	clxyzm25501fxvxyt57o8ts5v
clxyzlnwv000xvxyt143ewbrn	clxyzm25501fxvxyt57o8ts5v
clxyzlnwv0007vxytpaw22289	clxyzm25g01fzvxyt3myviaef
clxyzlnwv0009vxytz8ell2f8	clxyzm25g01fzvxyt3myviaef
clxyzlnwv000fvxytixcfhrem	clxyzm25g01fzvxyt3myviaef
clxyzlnwv000ivxyt4gph1usx	clxyzm25g01fzvxyt3myviaef
clxyzlnwv000rvxyt8rcjarwi	clxyzm25g01fzvxyt3myviaef
clxyzlnwv0006vxyt9crrvzrw	clxyzm25q01g1vxyt8mmmpb1v
clxyzlnwv000evxyt3nf91qic	clxyzm25q01g1vxyt8mmmpb1v
clxyzlnwv000mvxytse8ywfpm	clxyzm25q01g1vxyt8mmmpb1v
clxyzlnwv000qvxytqjsusc3e	clxyzm25q01g1vxyt8mmmpb1v
clxyzlnwv000wvxytpo4m0ksm	clxyzm25q01g1vxyt8mmmpb1v
clxyzlnwv0001vxytzujuopr4	clxyzm25z01g3vxytffxcdzn8
clxyzlnwv000evxyt3nf91qic	clxyzm25z01g3vxytffxcdzn8
clxyzlnwv000hvxytxg0ww15g	clxyzm25z01g3vxytffxcdzn8
clxyzlnwv000ivxyt4gph1usx	clxyzm25z01g3vxytffxcdzn8
clxyzlnwv000xvxyt143ewbrn	clxyzm25z01g3vxytffxcdzn8
clxyzlnwv0002vxytyfgxrego	clxyzm26701g5vxyt83ue4gzq
clxyzlnwv000avxyt2qtxczdn	clxyzm26701g5vxyt83ue4gzq
clxyzlnwv000bvxyt7k7uvmyb	clxyzm26701g5vxyt83ue4gzq
clxyzlnwv000ovxytthod276a	clxyzm26701g5vxyt83ue4gzq
clxyzlnwv000tvxytau91y7lo	clxyzm26701g5vxyt83ue4gzq
clxyzlnwv0000vxytw6wf0m79	clxyzm26i01g7vxytcjkdjmlc
clxyzlnwv0001vxytzujuopr4	clxyzm26i01g7vxytcjkdjmlc
clxyzlnwv000avxyt2qtxczdn	clxyzm26i01g7vxytcjkdjmlc
clxyzlnwv000lvxytzr9kmkay	clxyzm26i01g7vxytcjkdjmlc
clxyzlnwv000rvxyt8rcjarwi	clxyzm26i01g7vxytcjkdjmlc
clxyzlnwv0001vxytzujuopr4	clxyzm26p01g9vxytsoe0rshz
clxyzlnwv000gvxyt462yh3cm	clxyzm26p01g9vxytsoe0rshz
clxyzlnwv000jvxyt9opsyq53	clxyzm26p01g9vxytsoe0rshz
clxyzlnwv000mvxytse8ywfpm	clxyzm26p01g9vxytsoe0rshz
clxyzlnwv000pvxyt5dd6swg3	clxyzm26p01g9vxytsoe0rshz
clxyzlnwv0000vxytw6wf0m79	clxyzm26x01gbvxytxrbzr50i
clxyzlnwv0001vxytzujuopr4	clxyzm26x01gbvxytxrbzr50i
clxyzlnwv0008vxytkx5r6izw	clxyzm26x01gbvxytxrbzr50i
clxyzlnwv000fvxytixcfhrem	clxyzm26x01gbvxytxrbzr50i
clxyzlnwv000tvxytau91y7lo	clxyzm26x01gbvxytxrbzr50i
clxyzlnwv0002vxytyfgxrego	clxyzm27301gdvxytmlidjri7
clxyzlnwv000evxyt3nf91qic	clxyzm27301gdvxytmlidjri7
clxyzlnwv000svxytnd02a9wr	clxyzm27301gdvxytmlidjri7
clxyzlnwv000wvxytpo4m0ksm	clxyzm27301gdvxytmlidjri7
clxyzlnwv000xvxyt143ewbrn	clxyzm27301gdvxytmlidjri7
clxyzlnwv0006vxyt9crrvzrw	clxyzm27901gfvxyta3h306ug
clxyzlnwv0009vxytz8ell2f8	clxyzm27901gfvxyta3h306ug
clxyzlnwv000bvxyt7k7uvmyb	clxyzm27901gfvxyta3h306ug
clxyzlnwv000svxytnd02a9wr	clxyzm27901gfvxyta3h306ug
clxyzlnwv000xvxyt143ewbrn	clxyzm27901gfvxyta3h306ug
clxyzlnwv000lvxytzr9kmkay	clxyzmddz01hivxytssdc4qer
clxyzlnwv000lvxytzr9kmkay	clxyzmdek01hqvxyt6fmz9k4p
\.


--
-- Data for Name: _GradeToPerson; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_GradeToPerson" ("A", "B") FROM stdin;
clxyzlo1000c9vxyt955acqcc	clxyzlojl00davxyti8hlue08
clxyzlo1000c5vxyta1h206vj	clxyzlos600dbvxytk7ukhabx
clxyzlo1000c6vxyt6d831m2d	clxyzlp2e00dcvxytkej59ozk
clxyzlo1000cbvxytjvsa9pps	clxyzlpe100ddvxytbq5xl57h
clxyzlo1000cbvxytjvsa9pps	clxyzlpqe00devxyt9kk8uhnc
clxyzlo1000cavxyttfe49781	clxyzlq0n00dfvxytllyse2tw
clxyzlo1000c7vxyttqb8cue1	clxyzlqca00dgvxytmb72d25h
clxyzlo1000cbvxytjvsa9pps	clxyzlqop00dhvxyt9acxjypl
clxyzlo1000c8vxytovx6amd0	clxyzlr2900divxyt2lq0s5q5
clxyzlo1000c7vxyttqb8cue1	clxyzlrho00djvxytzqntoe14
\.


--
-- Data for Name: _GradeToVacant; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_GradeToVacant" ("A", "B") FROM stdin;
clxyzlo1000c9vxyt955acqcc	clxyzm21y01fdvxyt1jp1azrq
clxyzlo1000ccvxyt9qhe0sae	clxyzm21y01fdvxyt1jp1azrq
clxyzlo1000c9vxyt955acqcc	clxyzm22d01ffvxyt0joev7hq
clxyzlo1000cbvxytjvsa9pps	clxyzm22d01ffvxyt0joev7hq
clxyzlo1000c5vxyta1h206vj	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo1000cavxyttfe49781	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo1000cavxyttfe49781	clxyzm22y01fjvxyt593h3vlk
clxyzlo1000cbvxytjvsa9pps	clxyzm22y01fjvxyt593h3vlk
clxyzlo1000c6vxyt6d831m2d	clxyzm23701flvxyt85xqhcej
clxyzlo1000cavxyttfe49781	clxyzm23701flvxyt85xqhcej
clxyzlo1000cbvxytjvsa9pps	clxyzm23j01fnvxyt262w6ni9
clxyzlo1000ccvxyt9qhe0sae	clxyzm23j01fnvxyt262w6ni9
clxyzlo1000c5vxyta1h206vj	clxyzm23x01fpvxytue9bcdwo
clxyzlo1000cbvxytjvsa9pps	clxyzm23x01fpvxytue9bcdwo
clxyzlo1000cavxyttfe49781	clxyzm24a01frvxyt7nvd86is
clxyzlo1000ccvxyt9qhe0sae	clxyzm24a01frvxyt7nvd86is
clxyzlo1000c8vxytovx6amd0	clxyzm24m01ftvxytbwo56nyd
clxyzlo1000cavxyttfe49781	clxyzm24m01ftvxytbwo56nyd
clxyzlo1000c7vxyttqb8cue1	clxyzm24v01fvvxyt1ixuhon7
clxyzlo1000c9vxyt955acqcc	clxyzm24v01fvvxyt1ixuhon7
clxyzlo1000cbvxytjvsa9pps	clxyzm25501fxvxyt57o8ts5v
clxyzlo1000ccvxyt9qhe0sae	clxyzm25501fxvxyt57o8ts5v
clxyzlo1000c7vxyttqb8cue1	clxyzm25g01fzvxyt3myviaef
clxyzlo1000ccvxyt9qhe0sae	clxyzm25g01fzvxyt3myviaef
clxyzlo1000c5vxyta1h206vj	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo1000ccvxyt9qhe0sae	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo1000c7vxyttqb8cue1	clxyzm25z01g3vxytffxcdzn8
clxyzlo1000ccvxyt9qhe0sae	clxyzm25z01g3vxytffxcdzn8
clxyzlo1000c7vxyttqb8cue1	clxyzm26701g5vxyt83ue4gzq
clxyzlo1000c8vxytovx6amd0	clxyzm26701g5vxyt83ue4gzq
clxyzlo1000c8vxytovx6amd0	clxyzm26i01g7vxytcjkdjmlc
clxyzlo1000cbvxytjvsa9pps	clxyzm26i01g7vxytcjkdjmlc
clxyzlo1000c7vxyttqb8cue1	clxyzm26p01g9vxytsoe0rshz
clxyzlo1000cavxyttfe49781	clxyzm26p01g9vxytsoe0rshz
clxyzlo1000c5vxyta1h206vj	clxyzm26x01gbvxytxrbzr50i
clxyzlo1000c7vxyttqb8cue1	clxyzm26x01gbvxytxrbzr50i
clxyzlo1000cavxyttfe49781	clxyzm27301gdvxytmlidjri7
clxyzlo1000ccvxyt9qhe0sae	clxyzm27301gdvxytmlidjri7
clxyzlo1000c6vxyt6d831m2d	clxyzm27901gfvxyta3h306ug
clxyzlo1000cbvxytjvsa9pps	clxyzm27901gfvxyta3h306ug
clxyzlo1000ccvxyt9qhe0sae	clxyzmddz01hivxytssdc4qer
clxyzlo1000ccvxyt9qhe0sae	clxyzmdek01hqvxyt6fmz9k4p
\.


--
-- Data for Name: _JobToPerson; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_JobToPerson" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _OfferToSkill; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_OfferToSkill" ("A", "B") FROM stdin;
clxyzm0rg00ftvxytotk91mj0	clxyzlo0d00agvxytm8lr4cjc
clxyzm0rg00ftvxytotk91mj0	clxyzlo0d00ajvxytaxyx8d3h
clxyzm0rg00ftvxytotk91mj0	clxyzlo0d00akvxytaxdelo7r
clxyzm0rg00ftvxytotk91mj0	clxyzlo0d00b5vxytmluk2jer
clxyzm0rg00ftvxytotk91mj0	clxyzlo0e00brvxytzwhdivkc
clxyzm0s000fvvxytr742mafv	clxyzlo0d00aivxyt08r63ghr
clxyzm0s000fvvxytr742mafv	clxyzlo0d00asvxytm0e696j1
clxyzm0s000fvvxytr742mafv	clxyzlo0d00b2vxyt69obtwpd
clxyzm0s000fvvxytr742mafv	clxyzlo0d00b7vxytgok4mow6
clxyzm0s000fvvxytr742mafv	clxyzlo0e00bpvxytilfvvoli
clxyzm0sd00fxvxytler2f3as	clxyzlo0d00aivxyt08r63ghr
clxyzm0sd00fxvxytler2f3as	clxyzlo0d00b3vxytw0d8livk
clxyzm0sd00fxvxytler2f3as	clxyzlo0d00b7vxytgok4mow6
clxyzm0sd00fxvxytler2f3as	clxyzlo0e00blvxytrxfaegvo
clxyzm0sd00fxvxytler2f3as	clxyzlo0e00btvxyt1tthxznd
clxyzm0sm00fzvxytr9yq4joe	clxyzlo0d00afvxytue8mdgoq
clxyzm0sm00fzvxytr9yq4joe	clxyzlo0d00atvxyti2wzysr9
clxyzm0sm00fzvxytr9yq4joe	clxyzlo0d00b0vxytjcynmgir
clxyzm0sm00fzvxytr9yq4joe	clxyzlo0d00b6vxyt21hlrrig
clxyzm0sm00fzvxytr9yq4joe	clxyzlo0e00bvvxyttgd31ejp
clxyzm0sx00g1vxyt2fwyzyha	clxyzlo0d00aavxytf4dcxvhk
clxyzm0sx00g1vxyt2fwyzyha	clxyzlo0d00acvxyt28q2b6b9
clxyzm0sx00g1vxyt2fwyzyha	clxyzlo0d00azvxyt7j529yp6
clxyzm0sx00g1vxyt2fwyzyha	clxyzlo0d00b2vxyt69obtwpd
clxyzm0sx00g1vxyt2fwyzyha	clxyzlo0e00bkvxyt56ma6fk8
clxyzm0t600g3vxytqpjtbecg	clxyzlo0d00afvxytue8mdgoq
clxyzm0t600g3vxytqpjtbecg	clxyzlo0d00akvxytaxdelo7r
clxyzm0t600g3vxytqpjtbecg	clxyzlo0d00awvxytq5ghtsw3
clxyzm0t600g3vxytqpjtbecg	clxyzlo0d00azvxyt7j529yp6
clxyzm0t600g3vxytqpjtbecg	clxyzlo0d00b5vxytmluk2jer
clxyzm0tj00g5vxytlj2e0j02	clxyzlo0d00akvxytaxdelo7r
clxyzm0tj00g5vxytlj2e0j02	clxyzlo0d00b1vxytz2e2qwki
clxyzm0tj00g5vxytlj2e0j02	clxyzlo0e00bhvxyt6ir1fkl8
clxyzm0tj00g5vxytlj2e0j02	clxyzlo0e00bmvxytdxtiptr6
clxyzm0tj00g5vxytlj2e0j02	clxyzlo0e00c1vxyt4gl2t3kj
clxyzm0tw00g7vxythppmpci8	clxyzlo0d00avvxyt2krjzm6e
clxyzm0tw00g7vxythppmpci8	clxyzlo0d00b6vxyt21hlrrig
clxyzm0tw00g7vxythppmpci8	clxyzlo0d00bavxyt0iuob4dy
clxyzm0tw00g7vxythppmpci8	clxyzlo0e00bovxytgrdab7f9
clxyzm0tw00g7vxythppmpci8	clxyzlo0e00c1vxyt4gl2t3kj
clxyzm0ua00g9vxyt7s0tmzsw	clxyzlo0d00ahvxytc0hv4shr
clxyzm0ua00g9vxyt7s0tmzsw	clxyzlo0e00bkvxyt56ma6fk8
clxyzm0ua00g9vxyt7s0tmzsw	clxyzlo0e00bmvxytdxtiptr6
clxyzm0ua00g9vxyt7s0tmzsw	clxyzlo0e00btvxyt1tthxznd
clxyzm0ua00g9vxyt7s0tmzsw	clxyzlo0e00buvxyt0joo83th
clxyzm0ul00gbvxyty4udn3sd	clxyzlo0d00b6vxyt21hlrrig
clxyzm0ul00gbvxyty4udn3sd	clxyzlo0e00bdvxytbk1emapi
clxyzm0ul00gbvxyty4udn3sd	clxyzlo0e00bsvxytffaj5h4e
clxyzm0ul00gbvxyty4udn3sd	clxyzlo0e00bvvxyttgd31ejp
clxyzm0ul00gbvxyty4udn3sd	clxyzlo0e00byvxyt4425s9vr
clxyzm0uw00gdvxytc59x5biq	clxyzlo0d00ajvxytaxyx8d3h
clxyzm0uw00gdvxytc59x5biq	clxyzlo0d00apvxytz403baob
clxyzm0uw00gdvxytc59x5biq	clxyzlo0d00asvxytm0e696j1
clxyzm0uw00gdvxytc59x5biq	clxyzlo0e00bfvxyt3s4gmfeb
clxyzm0uw00gdvxytc59x5biq	clxyzlo0e00bovxytgrdab7f9
clxyzm0v600gfvxyt0pv48avp	clxyzlo0d00arvxyt8shq5380
clxyzm0v600gfvxyt0pv48avp	clxyzlo0d00b3vxytw0d8livk
clxyzm0v600gfvxyt0pv48avp	clxyzlo0e00bbvxytno1g9906
clxyzm0v600gfvxyt0pv48avp	clxyzlo0e00btvxyt1tthxznd
clxyzm0v600gfvxyt0pv48avp	clxyzlo0e00bwvxytw1zhcozw
clxyzm0vg00ghvxyttp7cdt7k	clxyzlo0d00atvxyti2wzysr9
clxyzm0vg00ghvxyttp7cdt7k	clxyzlo0d00ayvxytvavpviai
clxyzm0vg00ghvxyttp7cdt7k	clxyzlo0d00b0vxytjcynmgir
clxyzm0vg00ghvxyttp7cdt7k	clxyzlo0d00b4vxytwxl4qndh
clxyzm0vg00ghvxyttp7cdt7k	clxyzlo0e00btvxyt1tthxznd
clxyzm0vr00gjvxyty50ai2b3	clxyzlo0d00b3vxytw0d8livk
clxyzm0vr00gjvxyty50ai2b3	clxyzlo0e00brvxytzwhdivkc
clxyzm0vr00gjvxyty50ai2b3	clxyzlo0e00bsvxytffaj5h4e
clxyzm0vr00gjvxyty50ai2b3	clxyzlo0e00bvvxyttgd31ejp
clxyzm0vr00gjvxyty50ai2b3	clxyzlo0e00bxvxytfmr35m95
clxyzm0w100glvxytyrcll71r	clxyzlo0d00afvxytue8mdgoq
clxyzm0w100glvxytyrcll71r	clxyzlo0d00atvxyti2wzysr9
clxyzm0w100glvxytyrcll71r	clxyzlo0d00avvxyt2krjzm6e
clxyzm0w100glvxytyrcll71r	clxyzlo0e00bgvxytbbi73w9r
clxyzm0w100glvxytyrcll71r	clxyzlo0e00bnvxytgovw4y1e
clxyzm0wf00gnvxytj4xqltl4	clxyzlo0d00acvxyt28q2b6b9
clxyzm0wf00gnvxytj4xqltl4	clxyzlo0d00ahvxytc0hv4shr
clxyzm0wf00gnvxytj4xqltl4	clxyzlo0d00aivxyt08r63ghr
clxyzm0wf00gnvxytj4xqltl4	clxyzlo0d00alvxytxn4jbi7x
clxyzm0wf00gnvxytj4xqltl4	clxyzlo0d00azvxyt7j529yp6
clxyzm0wr00gpvxytqcwhx3w8	clxyzlo0d00acvxyt28q2b6b9
clxyzm0wr00gpvxytqcwhx3w8	clxyzlo0d00akvxytaxdelo7r
clxyzm0wr00gpvxytqcwhx3w8	clxyzlo0d00bavxyt0iuob4dy
clxyzm0wr00gpvxytqcwhx3w8	clxyzlo0e00bgvxytbbi73w9r
clxyzm0wr00gpvxytqcwhx3w8	clxyzlo0e00byvxyt4425s9vr
clxyzm0x100grvxyt8g44cszd	clxyzlo0d00aavxytf4dcxvhk
clxyzm0x100grvxyt8g44cszd	clxyzlo0d00aovxyt0of4s697
clxyzm0x100grvxyt8g44cszd	clxyzlo0e00bevxytyxx15e8f
clxyzm0x100grvxyt8g44cszd	clxyzlo0e00bnvxytgovw4y1e
clxyzm0x100grvxyt8g44cszd	clxyzlo0e00bvvxyttgd31ejp
clxyzm0xc00gtvxyt1i2fu4kh	clxyzlo0d00a9vxyt5kgtxp32
clxyzm0xc00gtvxyt1i2fu4kh	clxyzlo0d00apvxytz403baob
clxyzm0xc00gtvxyt1i2fu4kh	clxyzlo0d00asvxytm0e696j1
clxyzm0xc00gtvxyt1i2fu4kh	clxyzlo0d00bavxyt0iuob4dy
clxyzm0xc00gtvxyt1i2fu4kh	clxyzlo0e00bovxytgrdab7f9
clxyzm0xl00gvvxyte287wygi	clxyzlo0d00acvxyt28q2b6b9
clxyzm0xl00gvvxyte287wygi	clxyzlo0d00aivxyt08r63ghr
clxyzm0xl00gvvxyte287wygi	clxyzlo0d00ayvxytvavpviai
clxyzm0xl00gvvxyte287wygi	clxyzlo0d00bavxyt0iuob4dy
clxyzm0xl00gvvxyte287wygi	clxyzlo0e00bfvxyt3s4gmfeb
clxyzm0xv00gxvxytg5vqmij1	clxyzlo0d00aavxytf4dcxvhk
clxyzm0xv00gxvxytg5vqmij1	clxyzlo0d00advxytrgee52yv
clxyzm0xv00gxvxytg5vqmij1	clxyzlo0d00anvxytbb8giq5j
clxyzm0xv00gxvxytg5vqmij1	clxyzlo0e00bqvxyt1xgegtrh
clxyzm0xv00gxvxytg5vqmij1	clxyzlo0e00bwvxytw1zhcozw
clxyzm0y500gzvxyt8zb7jprv	clxyzlo0d00ayvxytvavpviai
clxyzm0y500gzvxyt8zb7jprv	clxyzlo0d00b3vxytw0d8livk
clxyzm0y500gzvxyt8zb7jprv	clxyzlo0e00bdvxytbk1emapi
clxyzm0y500gzvxyt8zb7jprv	clxyzlo0e00bhvxyt6ir1fkl8
clxyzm0y500gzvxyt8zb7jprv	clxyzlo0e00buvxyt0joo83th
clxyzm0yg00h1vxytfcn98ui2	clxyzlo0d00b3vxytw0d8livk
clxyzm0yg00h1vxytfcn98ui2	clxyzlo0e00bcvxyt8xaeah1k
clxyzm0yg00h1vxytfcn98ui2	clxyzlo0e00bdvxytbk1emapi
clxyzm0yg00h1vxytfcn98ui2	clxyzlo0e00c0vxytw09089ht
clxyzm0yg00h1vxytfcn98ui2	clxyzlo0e00c4vxytnc2wdzha
clxyzm0yp00h3vxyt883q0z82	clxyzlo0d00acvxyt28q2b6b9
clxyzm0yp00h3vxyt883q0z82	clxyzlo0d00ahvxytc0hv4shr
clxyzm0yp00h3vxyt883q0z82	clxyzlo0d00aovxyt0of4s697
clxyzm0yp00h3vxyt883q0z82	clxyzlo0d00b9vxytwxu9n1k2
clxyzm0yp00h3vxyt883q0z82	clxyzlo0e00bgvxytbbi73w9r
clxyzm0yy00h5vxyt2qqru2ly	clxyzlo0d00anvxytbb8giq5j
clxyzm0yy00h5vxyt2qqru2ly	clxyzlo0d00ayvxytvavpviai
clxyzm0yy00h5vxyt2qqru2ly	clxyzlo0d00b1vxytz2e2qwki
clxyzm0yy00h5vxyt2qqru2ly	clxyzlo0e00c3vxyteq1q1g7c
clxyzm0yy00h5vxyt2qqru2ly	clxyzlo0e00c4vxytnc2wdzha
clxyzm0za00h7vxytlmlchb5t	clxyzlo0d00abvxyt9pluf1d2
clxyzm0za00h7vxytlmlchb5t	clxyzlo0d00ahvxytc0hv4shr
clxyzm0za00h7vxytlmlchb5t	clxyzlo0e00bfvxyt3s4gmfeb
clxyzm0za00h7vxytlmlchb5t	clxyzlo0e00bgvxytbbi73w9r
clxyzm0za00h7vxytlmlchb5t	clxyzlo0e00bhvxyt6ir1fkl8
clxyzm0zo00h9vxyt3sxv2ug3	clxyzlo0d00apvxytz403baob
clxyzm0zo00h9vxyt3sxv2ug3	clxyzlo0e00bbvxytno1g9906
clxyzm0zo00h9vxyt3sxv2ug3	clxyzlo0e00bkvxyt56ma6fk8
clxyzm0zo00h9vxyt3sxv2ug3	clxyzlo0e00byvxyt4425s9vr
clxyzm0zo00h9vxyt3sxv2ug3	clxyzlo0e00c4vxytnc2wdzha
clxyzm10500hbvxythmshdmha	clxyzlo0d00akvxytaxdelo7r
clxyzm10500hbvxythmshdmha	clxyzlo0d00awvxytq5ghtsw3
clxyzm10500hbvxythmshdmha	clxyzlo0d00bavxyt0iuob4dy
clxyzm10500hbvxythmshdmha	clxyzlo0e00bnvxytgovw4y1e
clxyzm10500hbvxythmshdmha	clxyzlo0e00c0vxytw09089ht
clxyzm10n00hdvxytpv1bq5ij	clxyzlo0d00acvxyt28q2b6b9
clxyzm10n00hdvxytpv1bq5ij	clxyzlo0d00b1vxytz2e2qwki
clxyzm10n00hdvxytpv1bq5ij	clxyzlo0e00bgvxytbbi73w9r
clxyzm10n00hdvxytpv1bq5ij	clxyzlo0e00bmvxytdxtiptr6
clxyzm10n00hdvxytpv1bq5ij	clxyzlo0e00bnvxytgovw4y1e
clxyzm10w00hfvxytijlgu8rl	clxyzlo0d00agvxytm8lr4cjc
clxyzm10w00hfvxytijlgu8rl	clxyzlo0e00bcvxyt8xaeah1k
clxyzm10w00hfvxytijlgu8rl	clxyzlo0e00bkvxyt56ma6fk8
clxyzm10w00hfvxytijlgu8rl	clxyzlo0e00brvxytzwhdivkc
clxyzm10w00hfvxytijlgu8rl	clxyzlo0e00byvxyt4425s9vr
clxyzm11400hhvxytdnqzmtn6	clxyzlo0d00ajvxytaxyx8d3h
clxyzm11400hhvxytdnqzmtn6	clxyzlo0d00b3vxytw0d8livk
clxyzm11400hhvxytdnqzmtn6	clxyzlo0e00bevxytyxx15e8f
clxyzm11400hhvxytdnqzmtn6	clxyzlo0e00bqvxyt1xgegtrh
clxyzm11400hhvxytdnqzmtn6	clxyzlo0e00brvxytzwhdivkc
clxyzm11a00hjvxytrw6nirf7	clxyzlo0d00agvxytm8lr4cjc
clxyzm11a00hjvxytrw6nirf7	clxyzlo0d00aivxyt08r63ghr
clxyzm11a00hjvxytrw6nirf7	clxyzlo0e00blvxytrxfaegvo
clxyzm11a00hjvxytrw6nirf7	clxyzlo0e00buvxyt0joo83th
clxyzm11a00hjvxytrw6nirf7	clxyzlo0e00bwvxytw1zhcozw
clxyzm11h00hlvxytyjoczcbm	clxyzlo0d00anvxytbb8giq5j
clxyzm11h00hlvxytyjoczcbm	clxyzlo0e00bevxytyxx15e8f
clxyzm11h00hlvxytyjoczcbm	clxyzlo0e00bivxyt66x3afi1
clxyzm11h00hlvxytyjoczcbm	clxyzlo0e00bjvxyt247liadt
clxyzm11h00hlvxytyjoczcbm	clxyzlo0e00bpvxytilfvvoli
clxyzm11r00hnvxytk7ft3am9	clxyzlo0d00aivxyt08r63ghr
clxyzm11r00hnvxytk7ft3am9	clxyzlo0d00ajvxytaxyx8d3h
clxyzm11r00hnvxytk7ft3am9	clxyzlo0d00b7vxytgok4mow6
clxyzm11r00hnvxytk7ft3am9	clxyzlo0e00bbvxytno1g9906
clxyzm11r00hnvxytk7ft3am9	clxyzlo0e00bevxytyxx15e8f
clxyzm12200hpvxyttont8euy	clxyzlo0d00aivxyt08r63ghr
clxyzm12200hpvxyttont8euy	clxyzlo0d00ayvxytvavpviai
clxyzm12200hpvxyttont8euy	clxyzlo0d00b8vxyt97tr92c7
clxyzm12200hpvxyttont8euy	clxyzlo0e00buvxyt0joo83th
clxyzm12200hpvxyttont8euy	clxyzlo0e00bwvxytw1zhcozw
clxyzm12j00hrvxyt3xotb7ts	clxyzlo0d00b2vxyt69obtwpd
clxyzm12j00hrvxyt3xotb7ts	clxyzlo0d00b9vxytwxu9n1k2
clxyzm12j00hrvxyt3xotb7ts	clxyzlo0e00bbvxytno1g9906
clxyzm12j00hrvxyt3xotb7ts	clxyzlo0e00bdvxytbk1emapi
clxyzm12j00hrvxyt3xotb7ts	clxyzlo0e00bkvxyt56ma6fk8
clxyzm12s00htvxytfclkdj8t	clxyzlo0d00apvxytz403baob
clxyzm12s00htvxytfclkdj8t	clxyzlo0d00b2vxyt69obtwpd
clxyzm12s00htvxytfclkdj8t	clxyzlo0d00b6vxyt21hlrrig
clxyzm12s00htvxytfclkdj8t	clxyzlo0e00bdvxytbk1emapi
clxyzm12s00htvxytfclkdj8t	clxyzlo0e00bhvxyt6ir1fkl8
clxyzm13100hvvxytma3rqw1g	clxyzlo0d00ajvxytaxyx8d3h
clxyzm13100hvvxytma3rqw1g	clxyzlo0d00atvxyti2wzysr9
clxyzm13100hvvxytma3rqw1g	clxyzlo0d00b4vxytwxl4qndh
clxyzm13100hvvxytma3rqw1g	clxyzlo0e00bkvxyt56ma6fk8
clxyzm13100hvvxytma3rqw1g	clxyzlo0e00bqvxyt1xgegtrh
clxyzm13i00hxvxytm0070m9m	clxyzlo0d00aevxyt3m4e5i14
clxyzm13i00hxvxytm0070m9m	clxyzlo0d00avvxyt2krjzm6e
clxyzm13i00hxvxytm0070m9m	clxyzlo0d00b1vxytz2e2qwki
clxyzm13i00hxvxytm0070m9m	clxyzlo0e00bbvxytno1g9906
clxyzm13i00hxvxytm0070m9m	clxyzlo0e00bzvxyt0iqyw13f
clxyzm13p00hzvxyt32pr6h9w	clxyzlo0d00aovxyt0of4s697
clxyzm13p00hzvxyt32pr6h9w	clxyzlo0d00arvxyt8shq5380
clxyzm13p00hzvxyt32pr6h9w	clxyzlo0d00auvxytfux34ld4
clxyzm13p00hzvxyt32pr6h9w	clxyzlo0d00b5vxytmluk2jer
clxyzm13p00hzvxyt32pr6h9w	clxyzlo0e00bevxytyxx15e8f
clxyzm13y00i1vxyt9f6c948d	clxyzlo0d00advxytrgee52yv
clxyzm13y00i1vxyt9f6c948d	clxyzlo0d00aivxyt08r63ghr
clxyzm13y00i1vxyt9f6c948d	clxyzlo0d00aovxyt0of4s697
clxyzm13y00i1vxyt9f6c948d	clxyzlo0e00bevxytyxx15e8f
clxyzm13y00i1vxyt9f6c948d	clxyzlo0e00brvxytzwhdivkc
clxyzm14k00i3vxytju8p75gx	clxyzlo0d00awvxytq5ghtsw3
clxyzm14k00i3vxytju8p75gx	clxyzlo0e00bpvxytilfvvoli
clxyzm14k00i3vxytju8p75gx	clxyzlo0e00bxvxytfmr35m95
clxyzm14k00i3vxytju8p75gx	clxyzlo0e00c0vxytw09089ht
clxyzm14k00i3vxytju8p75gx	clxyzlo0e00c3vxyteq1q1g7c
clxyzm14v00i5vxyt6nwalxfw	clxyzlo0d00aevxyt3m4e5i14
clxyzm14v00i5vxyt6nwalxfw	clxyzlo0d00apvxytz403baob
clxyzm14v00i5vxyt6nwalxfw	clxyzlo0d00auvxytfux34ld4
clxyzm14v00i5vxyt6nwalxfw	clxyzlo0e00byvxyt4425s9vr
clxyzm14v00i5vxyt6nwalxfw	clxyzlo0e00c4vxytnc2wdzha
clxyzmdhu01j3vxytk9e9j5fq	clxyzlo0d00akvxytaxdelo7r
clxyzmdhu01j3vxytk9e9j5fq	clxyzlo0d00arvxyt8shq5380
clxyzmdhu01j3vxytk9e9j5fq	clxyzlo0e00bdvxytbk1emapi
clxyzmdi201javxyt4294oxwb	clxyzlo0d00afvxytue8mdgoq
clxyzmdi201javxyt4294oxwb	clxyzlo0e00bdvxytbk1emapi
clxyzmdi201javxyt4294oxwb	clxyzlo0e00btvxyt1tthxznd
clxyzmdi801jcvxytwk0byvuy	clxyzlo0d00akvxytaxdelo7r
clxyzmdi801jcvxytwk0byvuy	clxyzlo0d00arvxyt8shq5380
clxyzmdi801jcvxytwk0byvuy	clxyzlo0e00bdvxytbk1emapi
\.


--
-- Data for Name: _PersonToSkill; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_PersonToSkill" ("A", "B") FROM stdin;
clxyzlojl00davxyti8hlue08	clxyzlo0d00aevxyt3m4e5i14
clxyzlojl00davxyti8hlue08	clxyzlo0d00akvxytaxdelo7r
clxyzlojl00davxyti8hlue08	clxyzlo0e00bdvxytbk1emapi
clxyzlojl00davxyti8hlue08	clxyzlo0e00bevxytyxx15e8f
clxyzlojl00davxyti8hlue08	clxyzlo0e00bgvxytbbi73w9r
clxyzlos600dbvxytk7ukhabx	clxyzlo0d00afvxytue8mdgoq
clxyzlos600dbvxytk7ukhabx	clxyzlo0d00akvxytaxdelo7r
clxyzlos600dbvxytk7ukhabx	clxyzlo0d00arvxyt8shq5380
clxyzlos600dbvxytk7ukhabx	clxyzlo0e00bdvxytbk1emapi
clxyzlos600dbvxytk7ukhabx	clxyzlo0e00btvxyt1tthxznd
clxyzlp2e00dcvxytkej59ozk	clxyzlo0d00ajvxytaxyx8d3h
clxyzlp2e00dcvxytkej59ozk	clxyzlo0d00b2vxyt69obtwpd
clxyzlp2e00dcvxytkej59ozk	clxyzlo0e00bbvxytno1g9906
clxyzlp2e00dcvxytkej59ozk	clxyzlo0e00bjvxyt247liadt
clxyzlp2e00dcvxytkej59ozk	clxyzlo0e00c2vxyt69tobgzb
clxyzlpe100ddvxytbq5xl57h	clxyzlo0d00alvxytxn4jbi7x
clxyzlpe100ddvxytbq5xl57h	clxyzlo0d00awvxytq5ghtsw3
clxyzlpe100ddvxytbq5xl57h	clxyzlo0d00b7vxytgok4mow6
clxyzlpe100ddvxytbq5xl57h	clxyzlo0e00bhvxyt6ir1fkl8
clxyzlpe100ddvxytbq5xl57h	clxyzlo0e00bpvxytilfvvoli
clxyzlpqe00devxyt9kk8uhnc	clxyzlo0d00aavxytf4dcxvhk
clxyzlpqe00devxyt9kk8uhnc	clxyzlo0d00akvxytaxdelo7r
clxyzlpqe00devxyt9kk8uhnc	clxyzlo0d00ayvxytvavpviai
clxyzlpqe00devxyt9kk8uhnc	clxyzlo0d00bavxyt0iuob4dy
clxyzlpqe00devxyt9kk8uhnc	clxyzlo0e00bdvxytbk1emapi
clxyzlq0n00dfvxytllyse2tw	clxyzlo0d00b2vxyt69obtwpd
clxyzlq0n00dfvxytllyse2tw	clxyzlo0e00bevxytyxx15e8f
clxyzlq0n00dfvxytllyse2tw	clxyzlo0e00bfvxyt3s4gmfeb
clxyzlq0n00dfvxytllyse2tw	clxyzlo0e00bivxyt66x3afi1
clxyzlq0n00dfvxytllyse2tw	clxyzlo0e00byvxyt4425s9vr
clxyzlqca00dgvxytmb72d25h	clxyzlo0d00asvxytm0e696j1
clxyzlqca00dgvxytmb72d25h	clxyzlo0d00axvxyt4azdl75l
clxyzlqca00dgvxytmb72d25h	clxyzlo0d00b2vxyt69obtwpd
clxyzlqca00dgvxytmb72d25h	clxyzlo0e00bkvxyt56ma6fk8
clxyzlqca00dgvxytmb72d25h	clxyzlo0e00bzvxyt0iqyw13f
clxyzlqop00dhvxyt9acxjypl	clxyzlo0d00a9vxyt5kgtxp32
clxyzlqop00dhvxyt9acxjypl	clxyzlo0d00atvxyti2wzysr9
clxyzlqop00dhvxyt9acxjypl	clxyzlo0d00azvxyt7j529yp6
clxyzlqop00dhvxyt9acxjypl	clxyzlo0e00blvxytrxfaegvo
clxyzlqop00dhvxyt9acxjypl	clxyzlo0e00bovxytgrdab7f9
clxyzlr2900divxyt2lq0s5q5	clxyzlo0d00asvxytm0e696j1
clxyzlr2900divxyt2lq0s5q5	clxyzlo0d00atvxyti2wzysr9
clxyzlr2900divxyt2lq0s5q5	clxyzlo0e00bevxytyxx15e8f
clxyzlr2900divxyt2lq0s5q5	clxyzlo0e00bgvxytbbi73w9r
clxyzlr2900divxyt2lq0s5q5	clxyzlo0e00bmvxytdxtiptr6
clxyzlrho00djvxytzqntoe14	clxyzlo0d00a9vxyt5kgtxp32
clxyzlrho00djvxytzqntoe14	clxyzlo0d00abvxyt9pluf1d2
clxyzlrho00djvxytzqntoe14	clxyzlo0e00bpvxytilfvvoli
clxyzlrho00djvxytzqntoe14	clxyzlo0e00brvxytzwhdivkc
clxyzlrho00djvxytzqntoe14	clxyzlo0e00bxvxytfmr35m95
\.


--
-- Data for Name: _SkillToVacant; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public."_SkillToVacant" ("A", "B") FROM stdin;
clxyzlo0d00acvxyt28q2b6b9	clxyzm21y01fdvxyt1jp1azrq
clxyzlo0d00b4vxytwxl4qndh	clxyzm21y01fdvxyt1jp1azrq
clxyzlo0d00b8vxyt97tr92c7	clxyzm21y01fdvxyt1jp1azrq
clxyzlo0e00bhvxyt6ir1fkl8	clxyzm21y01fdvxyt1jp1azrq
clxyzlo0e00bmvxytdxtiptr6	clxyzm21y01fdvxyt1jp1azrq
clxyzlo0d00axvxyt4azdl75l	clxyzm22d01ffvxyt0joev7hq
clxyzlo0d00b0vxytjcynmgir	clxyzm22d01ffvxyt0joev7hq
clxyzlo0e00bfvxyt3s4gmfeb	clxyzm22d01ffvxyt0joev7hq
clxyzlo0e00bjvxyt247liadt	clxyzm22d01ffvxyt0joev7hq
clxyzlo0e00bnvxytgovw4y1e	clxyzm22d01ffvxyt0joev7hq
clxyzlo0d00aevxyt3m4e5i14	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo0d00ahvxytc0hv4shr	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo0e00bovxytgrdab7f9	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo0e00bzvxyt0iqyw13f	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo0e00c2vxyt69tobgzb	clxyzm22n01fhvxyt6sxpj5mx
clxyzlo0d00agvxytm8lr4cjc	clxyzm22y01fjvxyt593h3vlk
clxyzlo0d00ahvxytc0hv4shr	clxyzm22y01fjvxyt593h3vlk
clxyzlo0e00bkvxyt56ma6fk8	clxyzm22y01fjvxyt593h3vlk
clxyzlo0e00bpvxytilfvvoli	clxyzm22y01fjvxyt593h3vlk
clxyzlo0e00bsvxytffaj5h4e	clxyzm22y01fjvxyt593h3vlk
clxyzlo0d00akvxytaxdelo7r	clxyzm23701flvxyt85xqhcej
clxyzlo0d00alvxytxn4jbi7x	clxyzm23701flvxyt85xqhcej
clxyzlo0d00b9vxytwxu9n1k2	clxyzm23701flvxyt85xqhcej
clxyzlo0e00blvxytrxfaegvo	clxyzm23701flvxyt85xqhcej
clxyzlo0e00bovxytgrdab7f9	clxyzm23701flvxyt85xqhcej
clxyzlo0d00aivxyt08r63ghr	clxyzm23j01fnvxyt262w6ni9
clxyzlo0d00arvxyt8shq5380	clxyzm23j01fnvxyt262w6ni9
clxyzlo0d00azvxyt7j529yp6	clxyzm23j01fnvxyt262w6ni9
clxyzlo0d00b7vxytgok4mow6	clxyzm23j01fnvxyt262w6ni9
clxyzlo0e00bhvxyt6ir1fkl8	clxyzm23j01fnvxyt262w6ni9
clxyzlo0d00ahvxytc0hv4shr	clxyzm23x01fpvxytue9bcdwo
clxyzlo0d00auvxytfux34ld4	clxyzm23x01fpvxytue9bcdwo
clxyzlo0d00b1vxytz2e2qwki	clxyzm23x01fpvxytue9bcdwo
clxyzlo0e00bgvxytbbi73w9r	clxyzm23x01fpvxytue9bcdwo
clxyzlo0e00bivxyt66x3afi1	clxyzm23x01fpvxytue9bcdwo
clxyzlo0d00a9vxyt5kgtxp32	clxyzm24a01frvxyt7nvd86is
clxyzlo0d00abvxyt9pluf1d2	clxyzm24a01frvxyt7nvd86is
clxyzlo0d00avvxyt2krjzm6e	clxyzm24a01frvxyt7nvd86is
clxyzlo0d00b6vxyt21hlrrig	clxyzm24a01frvxyt7nvd86is
clxyzlo0e00bqvxyt1xgegtrh	clxyzm24a01frvxyt7nvd86is
clxyzlo0d00abvxyt9pluf1d2	clxyzm24m01ftvxytbwo56nyd
clxyzlo0d00agvxytm8lr4cjc	clxyzm24m01ftvxytbwo56nyd
clxyzlo0d00aqvxyth7t8esjk	clxyzm24m01ftvxytbwo56nyd
clxyzlo0e00bmvxytdxtiptr6	clxyzm24m01ftvxytbwo56nyd
clxyzlo0e00c1vxyt4gl2t3kj	clxyzm24m01ftvxytbwo56nyd
clxyzlo0d00agvxytm8lr4cjc	clxyzm24v01fvvxyt1ixuhon7
clxyzlo0d00ahvxytc0hv4shr	clxyzm24v01fvvxyt1ixuhon7
clxyzlo0e00bdvxytbk1emapi	clxyzm24v01fvvxyt1ixuhon7
clxyzlo0e00bfvxyt3s4gmfeb	clxyzm24v01fvvxyt1ixuhon7
clxyzlo0e00bgvxytbbi73w9r	clxyzm24v01fvvxyt1ixuhon7
clxyzlo0d00a9vxyt5kgtxp32	clxyzm25501fxvxyt57o8ts5v
clxyzlo0d00apvxytz403baob	clxyzm25501fxvxyt57o8ts5v
clxyzlo0d00b8vxyt97tr92c7	clxyzm25501fxvxyt57o8ts5v
clxyzlo0e00bovxytgrdab7f9	clxyzm25501fxvxyt57o8ts5v
clxyzlo0e00c2vxyt69tobgzb	clxyzm25501fxvxyt57o8ts5v
clxyzlo0d00afvxytue8mdgoq	clxyzm25g01fzvxyt3myviaef
clxyzlo0d00ajvxytaxyx8d3h	clxyzm25g01fzvxyt3myviaef
clxyzlo0d00axvxyt4azdl75l	clxyzm25g01fzvxyt3myviaef
clxyzlo0d00b1vxytz2e2qwki	clxyzm25g01fzvxyt3myviaef
clxyzlo0e00bevxytyxx15e8f	clxyzm25g01fzvxyt3myviaef
clxyzlo0d00aevxyt3m4e5i14	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo0d00avvxyt2krjzm6e	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo0d00b1vxytz2e2qwki	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo0e00bnvxytgovw4y1e	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo0e00bvvxyttgd31ejp	clxyzm25q01g1vxyt8mmmpb1v
clxyzlo0d00a9vxyt5kgtxp32	clxyzm25z01g3vxytffxcdzn8
clxyzlo0d00apvxytz403baob	clxyzm25z01g3vxytffxcdzn8
clxyzlo0d00arvxyt8shq5380	clxyzm25z01g3vxytffxcdzn8
clxyzlo0d00b4vxytwxl4qndh	clxyzm25z01g3vxytffxcdzn8
clxyzlo0e00bvvxyttgd31ejp	clxyzm25z01g3vxytffxcdzn8
clxyzlo0d00ayvxytvavpviai	clxyzm26701g5vxyt83ue4gzq
clxyzlo0d00b3vxytw0d8livk	clxyzm26701g5vxyt83ue4gzq
clxyzlo0d00b5vxytmluk2jer	clxyzm26701g5vxyt83ue4gzq
clxyzlo0e00bqvxyt1xgegtrh	clxyzm26701g5vxyt83ue4gzq
clxyzlo0e00byvxyt4425s9vr	clxyzm26701g5vxyt83ue4gzq
clxyzlo0d00afvxytue8mdgoq	clxyzm26i01g7vxytcjkdjmlc
clxyzlo0e00bevxytyxx15e8f	clxyzm26i01g7vxytcjkdjmlc
clxyzlo0e00bpvxytilfvvoli	clxyzm26i01g7vxytcjkdjmlc
clxyzlo0e00brvxytzwhdivkc	clxyzm26i01g7vxytcjkdjmlc
clxyzlo0e00c1vxyt4gl2t3kj	clxyzm26i01g7vxytcjkdjmlc
clxyzlo0d00aqvxyth7t8esjk	clxyzm26p01g9vxytsoe0rshz
clxyzlo0d00b6vxyt21hlrrig	clxyzm26p01g9vxytsoe0rshz
clxyzlo0d00b9vxytwxu9n1k2	clxyzm26p01g9vxytsoe0rshz
clxyzlo0e00brvxytzwhdivkc	clxyzm26p01g9vxytsoe0rshz
clxyzlo0e00bvvxyttgd31ejp	clxyzm26p01g9vxytsoe0rshz
clxyzlo0d00avvxyt2krjzm6e	clxyzm26x01gbvxytxrbzr50i
clxyzlo0d00azvxyt7j529yp6	clxyzm26x01gbvxytxrbzr50i
clxyzlo0d00b2vxyt69obtwpd	clxyzm26x01gbvxytxrbzr50i
clxyzlo0e00bqvxyt1xgegtrh	clxyzm26x01gbvxytxrbzr50i
clxyzlo0e00bvvxyttgd31ejp	clxyzm26x01gbvxytxrbzr50i
clxyzlo0d00apvxytz403baob	clxyzm27301gdvxytmlidjri7
clxyzlo0d00b1vxytz2e2qwki	clxyzm27301gdvxytmlidjri7
clxyzlo0e00bhvxyt6ir1fkl8	clxyzm27301gdvxytmlidjri7
clxyzlo0e00blvxytrxfaegvo	clxyzm27301gdvxytmlidjri7
clxyzlo0e00bvvxyttgd31ejp	clxyzm27301gdvxytmlidjri7
clxyzlo0d00apvxytz403baob	clxyzm27901gfvxyta3h306ug
clxyzlo0e00bbvxytno1g9906	clxyzm27901gfvxyta3h306ug
clxyzlo0e00bkvxyt56ma6fk8	clxyzm27901gfvxyta3h306ug
clxyzlo0e00blvxytrxfaegvo	clxyzm27901gfvxyta3h306ug
clxyzlo0e00c0vxytw09089ht	clxyzm27901gfvxyta3h306ug
clxyzlo0d00a9vxyt5kgtxp32	clxyzmddz01hivxytssdc4qer
clxyzlo0d00aavxytf4dcxvhk	clxyzmddz01hivxytssdc4qer
clxyzlo0d00abvxyt9pluf1d2	clxyzmddz01hivxytssdc4qer
clxyzlo0d00acvxyt28q2b6b9	clxyzmddz01hivxytssdc4qer
clxyzlo0d00aovxyt0of4s697	clxyzmdek01hqvxyt6fmz9k4p
clxyzlo0d00apvxytz403baob	clxyzmdek01hqvxyt6fmz9k4p
clxyzlo0d00b9vxytwxu9n1k2	clxyzmdek01hqvxyt6fmz9k4p
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: tkcfamily
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
dbe7d606-4888-4844-b6f8-f79c866022de	d69b63be76261160a0688aa49cf7d6c20f0b1a0e736d9c85de2c6ad340a946b1	2024-06-28 13:48:26.564243-04	20231019171228_default_internship_completed	\N	\N	2024-06-28 13:48:26.560109-04	1
f25728eb-04e1-4d63-acfd-b0200348d95e	78f527ee98966b080e173450ad388ca8d69f092696326bdab9aff7b0d0884afa	2024-06-28 13:48:26.092181-04	20230728020152_initial	\N	\N	2024-06-28 13:48:25.875429-04	1
9dee8e05-88b1-4f93-abbc-703eb6592b2d	87f8385a86e06300805f566153ed8d1cb8102008f8560c6ca0317d116eac2a08	2024-06-28 13:48:26.258121-04	20230824020713_deleted_at_without_profile	\N	\N	2024-06-28 13:48:26.248805-04	1
f066f8df-2546-49b7-91f1-1845630b1e72	e0f12fcfa332f20628482bd21b12a1a076d9af306b42fcaa0115ab71e24dc0c7	2024-06-28 13:48:26.109994-04	20230728215755_added_location_model	\N	\N	2024-06-28 13:48:26.094456-04	1
a58ef81f-f96d-4f23-92a8-3993246fcdf3	f50e2e295e50b02c2ac3de4586c36e7dc9927e864ca99cfbb35aee088a7c28c7	2024-06-28 13:48:26.116062-04	20230801020016_add_birth_ci_person	\N	\N	2024-06-28 13:48:26.111943-04	1
243bb869-4f03-4ab9-849c-0bf96fd0f057	561c607b9aae0b7528275393ff2dd987644878df33f829c7ed386642a933c0fa	2024-06-28 13:48:26.534542-04	20231010151416_removed_features	\N	\N	2024-06-28 13:48:26.514387-04	1
80a260cd-7026-4b79-bfb9-076c9971d84a	4db431b8614f784646b494bde8311334b080ff5ddbb3b54c8b2165a65aaea504	2024-06-28 13:48:26.123259-04	20230801160901_added_unique_to_skills	\N	\N	2024-06-28 13:48:26.117369-04	1
d9fe8f60-21c6-4a69-9486-78acd44bea22	60d0f0755861cd7e458d0f4b6acb9c4b874704b1377171c13dd6a20504e5d71c	2024-06-28 13:48:26.421621-04	20230904151918_revamped_tables	\N	\N	2024-06-28 13:48:26.260515-04	1
0dbb4a87-735b-456c-8eff-1f566551c049	e16350bef292013f122110c8b0fe48a266b2029a7a71912e21a28db0fce9a550	2024-06-28 13:48:26.130823-04	20230802033338_unique_ci	\N	\N	2024-06-28 13:48:26.124619-04	1
61904b6d-c068-4af2-829f-da1a64712d31	f8df8ef59921cb08856d27aa2daa8460805e73f808d298a122db688b7204e651	2024-06-28 13:48:26.139588-04	20230809212825_added_rif	\N	\N	2024-06-28 13:48:26.132107-04	1
466779fb-01eb-4eb9-8794-a5adbeaa6b92	03f8b7bf8ff214e8fd8d9156a6d996afdafcc1ab1a3d627908f304ab38ee565c	2024-06-28 13:48:26.148263-04	20230810184506_added_pre_registration	\N	\N	2024-06-28 13:48:26.140808-04	1
ca22e518-20a7-438e-b872-36544c2ee981	ee99ebca19f5a3588cad2f0417ce0d65e2e83299b1ffab11d296f528e471bc0f	2024-06-28 13:48:26.432829-04	20230911103940_removed_softdelete	\N	\N	2024-06-28 13:48:26.423331-04	1
02c6efce-c01a-4003-b9c8-d0addb25f397	b7f03a87efcf4541c35f0e8609c9a46ba1ee56fd54ccaf270bbe34662be903d6	2024-06-28 13:48:26.153429-04	20230811162422_removed_pre_registration_lol	\N	\N	2024-06-28 13:48:26.149394-04	1
8f070d7b-650b-49d9-ae05-af10c8319ef6	2951b4607fcdd5dbffe78b8f8df71968ce992fff4e242d27da50ac8b8ceaa351	2024-06-28 13:48:26.159486-04	20230815131547_changes_bio_phone	\N	\N	2024-06-28 13:48:26.154509-04	1
6aca6960-6883-48e5-964a-95ea3d770336	d2cfbf0598bd0c8e3c998ab2deebc317bc17d97ac5c7437833f122fcf001026b	2024-06-28 13:48:26.167641-04	20230822202557_added_deletedat	\N	\N	2024-06-28 13:48:26.161039-04	1
80d906cc-2686-46b8-b8f3-730e304a1cde	9ee1adfc4f3fa134439e764e278408e012f61d69c685edec3eff1015b788084e	2024-06-28 13:48:26.43998-04	20230921193518_added_gender	\N	\N	2024-06-28 13:48:26.435096-04	1
26d6d1f8-de87-4e58-8cbf-9f247e79cf74	9115302e7afef1dcf72f64873e01382069d2968c4146db526f6ef36ae6f3a5f6	2024-06-28 13:48:26.212938-04	20230822211304_added_delete_update_cascade	\N	\N	2024-06-28 13:48:26.169142-04	1
d5eb9d2b-b0f9-4d8f-8586-f583d9c7240f	58523b6347233d68fb82b98708765340a728a20d6723a870ae9bd408e98e0526	2024-06-28 13:48:26.218207-04	20230822215633_required_description	\N	\N	2024-06-28 13:48:26.214453-04	1
e1dd9205-cb25-4ab3-9b0c-99359edd5e06	3c786b4824d4b71bf31834eee9d2789abe638363fbec327d5cf3d3604ba29f6a	2024-06-28 13:48:26.540029-04	20231010195916_removed_curriculum	\N	\N	2024-06-28 13:48:26.536088-04	1
6d875106-a706-4539-94b3-e0405636a5f1	87b55db50b1ebd473c7d572756129bfd9da7cc42c3364fb5d2a080f203adbf12	2024-06-28 13:48:26.24736-04	20230823174512_removed_profile	\N	\N	2024-06-28 13:48:26.219404-04	1
c3281da0-9303-4974-af1e-e0ca9664f24c	e28aea791142929bffa2b699610bc45baa22a957a3478b764738234cd7fe616f	2024-06-28 13:48:26.458191-04	20230927181659_added_invitation	\N	\N	2024-06-28 13:48:26.441578-04	1
16947828-140e-4f2f-afe6-45a2c93c514e	e9f6f9ae9b61851701fcbda812899e4cbb426512fbad0a845432c9cfd49d0ead	2024-06-28 13:48:26.467035-04	20230927182520_featured_until	\N	\N	2024-06-28 13:48:26.461122-04	1
5e9df08d-f856-4673-9206-3e72e107c960	b1ee3bcbe7e020344969efa5c2a640b4f5cc92a1b97dad66f818d85c36003340	2024-06-28 13:48:26.618323-04	20231030154700_removed_read_at	\N	\N	2024-06-28 13:48:26.613902-04	1
3e29ec27-0e42-4e46-8211-2e4ff7677616	0c66380232ffc9fcd9a2bb97a77f44a9947998424f72a8e2e10dda0305f7c9c4	2024-06-28 13:48:26.490938-04	20230927200808_added_leader	\N	\N	2024-06-28 13:48:26.46941-04	1
638acc05-9179-4210-9432-2dee207c2adf	2ee5c1ffc5b6e8697ad7bccafc8956778b13a227c865e729f597b3216cf65a8d	2024-06-28 13:48:26.546134-04	20231013132204_internship_update	\N	\N	2024-06-28 13:48:26.541418-04	1
7a6a1790-aef1-4ec5-9f9c-256ff19a7b6f	1d490cd1190a0a8ed7a6d1cc1296c1f3dcf694e51bc3f9dd52df525a0883b215	2024-06-28 13:48:26.508897-04	20231004230543_admin	\N	\N	2024-06-28 13:48:26.492338-04	1
4844f5e4-b0ec-42e5-891a-eee9cd93a3a9	7728a40211624d45998ae312e2da36d40f0d857fde907417ebef6885a8da8b87	2024-06-28 13:48:26.51328-04	20231004232308_user_type	\N	\N	2024-06-28 13:48:26.51028-04	1
15aa6f12-57c6-4126-b35f-c78e49accf49	4f2df7db9a9e17b426c576a5e0bf553687af437c5df9a2c2a92aa5057bd53894	2024-06-28 13:48:26.574638-04	20231022193548_added_subparticipation_model	\N	\N	2024-06-28 13:48:26.565549-04	1
edda4caf-f316-4514-aa20-5e64c6a438e6	ae16ffd48f7a31fcd30929ee6f2b60079fa24ac8b3fa18f7e6ee954535a57ce5	2024-06-28 13:48:26.551406-04	20231013132611_status_hiring_required	\N	\N	2024-06-28 13:48:26.547394-04	1
e7bdd9bc-b9cd-4450-a7a1-4b24819a82bf	4c26a04ecd3cb337bc2d30c9357a58e7df1cc4574639740ef7d2ae677461a848	2024-06-28 13:48:26.557628-04	20231013152913_recruitment_status	\N	\N	2024-06-28 13:48:26.552505-04	1
784d8b2c-6ced-441f-bc10-42e91ddea1b4	e1fd61336b4a0d2ea9b91c24ca154b4d1d014206259f78a72173920f82650074	2024-06-28 13:48:26.602192-04	20231026173939_reset_uuid	\N	\N	2024-06-28 13:48:26.59816-04	1
a1451ad2-9f17-42bd-86cf-d050081f5877	4a1ae1c93e5f2424162f402dd0a3d725ce7aa35a8c4cf3e7e3f21b6b1956a7a0	2024-06-28 13:48:26.582152-04	20231025004735_notifications	\N	\N	2024-06-28 13:48:26.576057-04	1
54ab1753-abf4-4b3a-8dfd-ec8bec368557	1dca981c33c001ee97e2c48412b207e8a6d4ff6950067ad60b99d617886b4f02	2024-06-28 13:48:26.612246-04	20231030124924_default_status_invitation	\N	\N	2024-06-28 13:48:26.608557-04	1
a77127c5-4a6e-4698-b2ab-04ff62d2f7e1	35b26e0d85f993ca7e1beebfa78c443b23222eac6d6e83ab8192e00352ad61d2	2024-06-28 13:48:26.596291-04	20231026144627_password_reset	\N	\N	2024-06-28 13:48:26.58387-04	1
8781ef2a-023d-4ad4-8a68-6b22e5b3464b	ef489a04b0e499d82469309ad5118b7d92975b2c629737d7a15ddfe638eabe68	2024-06-28 13:48:26.60739-04	20231027215121_failed_pass	\N	\N	2024-06-28 13:48:26.603835-04	1
e5ca0d3a-44e9-4efa-846f-5628794f513e	4e7b564960bc6f10b369fd05bbe6274905ce87a9f14cb1e799708d0860f90357	2024-06-28 13:48:26.623647-04	20231106171523_vacant_update	\N	\N	2024-06-28 13:48:26.619836-04	1
e5e40481-baf5-4b4f-8a36-9c115eba4ab3	b35b8606560200bb992388563173f814a59b3f7b222a5e83cbcfc4739df85609	2024-06-28 13:48:26.628631-04	20231107171338_offer_hidden	\N	\N	2024-06-28 13:48:26.624745-04	1
d3aebe03-694b-4fb8-a620-cff8ad97fc16	0e65ac634b19fc2aae8cee23195a2d4b957882bfe5e039c92919397f37b05a04	2024-06-28 13:48:26.636836-04	20231110152028_project_team_code_added	\N	\N	2024-06-28 13:48:26.629701-04	1
5846798c-6e13-4829-859e-dd110ede628d	768c03c66e2683e46bab0a7d5e9d2a3ff45d2389d8f1e3219748a7e2eb6f0d9b	2024-06-28 13:48:26.647448-04	20231117230131_progress_table	\N	\N	2024-06-28 13:48:26.638249-04	1
35700599-f558-423b-affb-5ca9e65a2940	2bbbc94c86c327f4f12fd8752513dd2947f03b73fc7a18e5baa1118f887bd86f	2024-06-28 13:48:26.654297-04	20231122221054_progress_added	\N	\N	2024-06-28 13:48:26.649284-04	1
c8bdb645-4138-4ee2-ba01-d557879a2b2b	afe7bcf14bb539d693068827294efff09cc6440bb817eceb0228676cd5967654	2024-06-28 13:48:26.659102-04	20231122232632_optional_recruitement_dates	\N	\N	2024-06-28 13:48:26.655496-04	1
014dea56-854c-4d54-b723-ff1ba6703f44	742b9ba32dd70ec2f29ae7ab44304d0fc93ba068ad5d78760016b156e5fad817	2024-06-28 13:48:26.663336-04	20231214211718_added_interested_invitation	\N	\N	2024-06-28 13:48:26.660223-04	1
23a201ac-62d3-4af9-a0b0-480499b5544e	eba0d3c7de3a0167b476b23ce1266606ff51bc6e3475d28c07e9b049d27bba68	2024-06-28 13:48:26.703693-04	20231218130719_new_tables	\N	\N	2024-06-28 13:48:26.664601-04	1
866074e7-7bde-40ce-9fe6-c935971e0c26	bd567904ee4befbba99facad97e29898759815cd3bd6d303b202b1dd5d6a511d	2024-06-28 13:48:26.708423-04	20240126191653_optional_image	\N	\N	2024-06-28 13:48:26.705211-04	1
a116d77e-b4e6-49de-a761-e2103a0f240b	8e86dde6a1ebfe70d031101d347615e4a31ca2ad9ced958fa15954b713de68c6	2024-06-28 13:48:26.717664-04	20240202173834_add_log_model	\N	\N	2024-06-28 13:48:26.709548-04	1
8ce25644-69b7-4051-9de7-4fc931d73f2f	a8249a1b08356c44f3d024786bd3da858e01fb109b8df866aa2e8de6234760c3	2024-06-28 13:48:26.723309-04	20240210140150_new_log_model	\N	\N	2024-06-28 13:48:26.719079-04	1
\.


--
-- PostgreSQL database dump complete
--

