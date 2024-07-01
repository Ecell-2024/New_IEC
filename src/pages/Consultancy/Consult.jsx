import { motion } from "framer-motion";
import React from 'react'
import { AuroraBackground } from "../../components/ui/aurora-background";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Civil1 from "../../assets/Civil1.jpeg"
import Civil2 from "../../assets/Civil2.jpeg"
import ME1 from "../../assets/ME1.jpg"
import EEE1 from "../../assets/EEE1.jpeg"
import KSOP1 from "../../assets/KSOP1.jpeg"
import { fadeIn } from "../../components/About/Variant";
import Lottie from "lottie-react";
import lot from "../../assets/Home/Animation - 1705429785180.json";
import { TiLightbulb } from "react-icons/ti";
import Button from "../../components/About/Button";


const content = [
    {
        title: "Civil Engineering Department", //Collaborative Editing
        description:
            (
                <div>
                    <ul>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Total Stations:</h1>
                            <ol>
                                <li >
                                    <p><span className=" font-semibold">1 Hectare: </span>Plain, Obstruction Free Land with and without RL,</p>
                                </li>
                                <li >
                                    <p>Built up Area with and without RL</p>
                                </li>
                            </ol>
                        </li>
                        <li className=" list-disc my-8 lg:my-20 mx-3 lg:mx-6">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Concrete:</h1>
                            <ol>
                                <li className=" list-decimal">
                                    <p>Concrete Mix Design (For each grade),</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p>Concrete Cube testing (3 cubes per batch)</p>
                                </li>
                            </ol>
                        </li>
                        <li className= "my-8 lg:my-20 list-disc mx-3 lg:mx-6">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">NDT of Concrete:</h1>
                            <ol>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">REBOUND HAMMER: </span>10 POINTS (3 Readings Per Point)</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">UPV TESTER: </span>Per structure element</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">HALF-CELL
                                        POTENTIOMETER: </span>Corrosion Mapping (Area 1m x 1m)</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">REBAR LOCATOR AND
                                        COVER METER: </span>No. of Bars, Location and Cover Depth (Per structure element)</p>
                                </li>

                            </ol>
                        </li>
                    </ul>
                </div>
            ),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src={Civil2}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Mechanical Engineering Department",
        description:
            (
                <div>
                    <ul>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Material Testing:</h1>
                            <ol>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Surface Roughness Test: </span>Roughness Parameters- Ra, Rz, RY, Rq, Rt, Rp, Rmax,
                                        Range- 0.02-160µ m</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Impact Test: </span>Potential Energy (Joules)-300, Overall size (mm) -
                                        930Lx460Wx2070H, Resolution for AIT-300-
                                        ASTM(D)- 0.5</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">NDT for Internal flaws, welding
                                        defects: </span>Ultrasonic Flaw Detector (DIGISCAN DS-324)</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Computerized UTM: </span>Max capacity=400KN</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Fatigue Test: </span>Maximum bending moment 2NM, Range-2.5-12.5Nm,
                                        Rotating speed=5000 rpm</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Torsion test of a rod using torsion
                                        testing machine: </span>Model no-RTT-50, Max torque-50(NM), Torque
                                        speed-1.5RPM
                                    </p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Bottom Loading Furnace: </span>Programmable Bottom loading furnace- Max.Temp.-
                                        1200⁰C, Working temp.-1000⁰C, Chamber- 6x6x12 5,
                                        Anvil - 4x4
                                    </p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Pin/ball on Disc Tester TR-20LE
                                        PHM-400: </span>Sliding wear test machine
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li className=" list-disc my-8 lg:my-20 mx-3 lg:mx-6">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Casting/ Machining
                            </h1>
                            <ol>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Stir Casting</span></p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Lathe/ Milling/ Drilling M/C</span></p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Vertical Milling M/C (VMC):</span>Machining Center 3–axes with Vertical Spindle. Table
                                        Size (mm): 915 x 460
                                        T-Slot-Dimension (mm): 3 x 14 x 125
                                        Max Load on Table (Kgf): 500</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Flat Bed Plasma Cutting M/C:</span>Max Cutting Thickness - 0.5-5mm, Max Cutting
                                        Speed- 0-6000mm/min, Working Material- Iron, Steel,
                                        Aluminum sheets, Galvanized sheets, Titanium Plates</p>
                                </li>
                            </ol>
                        </li>
                        <li className=" list-disc my-8 lg:my-20 mx-3 lg:mx-6">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Internal Combustion Engine Test: </h1>
                            <ol>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Morse test: </span>3-Cylinder Maruti Engine, Max. power output of 48 PS
                                        @ 6000 rpm and a peak torque of 69 Nm @ 3500 rpm</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">VCR Petrol Engine: </span>Variable compression engines (Range 12-18 CR)</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Diesel Engine: </span>5BHP, Single Cylinder</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Exhaust 5-Gas Analyzer: </span>CO, CO2, HC, NOx, O2</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Smoke Meter: </span>Model SM-054, Measuring range - 99.99% opacity,
                                        rpm range up to 6000</p>
                                </li>

                            </ol>
                        </li>
                    </ul>
                </div>
            ),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src={ME1}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Electrical and Electronics Engineering Department",
        description:
            (
                <div>
                    <ul>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Simulation and Prototyping: </h1>
                            <ol>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Prototype PCB Machine: </span>Parshwanath robotics 1KW, 2400RPM, 230V, 50
                                        Hertz</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">OPAL-RT (OP4510)
                                        (CPU-based real-time simulation
                                        and sub-microsecond time step
                                        power electronic simulation): </span>In build Intel Xeon 4-Core processors, Xilinx Kintex 7
                                        FPGA (2U chassis works equally well for desktop or
                                        rack mounted setups), 128 high-performance
                                        analog/digital channels with signal conditioning, 4 SFPGTX optical high-speed links for hardware interfacing,
                                        32 digital outputs, 32 digital inputs, 16 analog outputs,
                                        and 16 analog inputs
                                    </p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Digital Storage Oscilloscope
                                        (100 mhz): </span>RIGOL DS1102E, 2 channel, 100 mhz</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Digital Storage Oscilloscope (60
                                        MHz/1GS): </span>60 MHz/1GS, 2 channel, Make-SCIENTIFIC</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">100 MHZ Color Digital Storage
                                        Oscilloscope model: DS1102E
                                        make Rigol: </span>100 MHZ, 2 channel, Resolution 320 x 234 Pixel,
                                        model: DS1102E make Rigol
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Power quality analysis and energy auditing
                            </h1>
                            <ol>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Single Phase Power Analyser
                                        WT300E Digital Power Analyzer
                                        (Power quality analysis and
                                        energy auditing):</span>Current measurement capability:
                                        50 micro-Amps to to 26 Amps RMS.
                                        Stand-by power measurements, Energy Star®,
                                        SPECpower and IEC62301 / EN50564 testing, battery
                                        charger and other low-level power measurements.</p>
                                </li>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">Power Quality Analyzer Fluke
                                        make Sr.No.31113105:</span>Vrms (AC + DC): 1 V to 1000 V phase to neutral,
                                        Vpk: 1 Vpk to 1400 Vpk
                                        Amps (AC + DC): 5 A to 6000 A, max 2000 MW</p>
                                </li>
                            </ol>
                        </li>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Electrical Design and estimation of PV based solar power system (Feasibility Analysis for PV system installations): </h1>
                            <ol>
                                <li className="list-decimal my-2">
                                    <p><span className="font-semibold">PVsyst 6 PRO 30: </span>Industrial datasheets of PV panels, inverters and other parameters
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            ),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src={EEE1}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "KSOP Department",
        description:
            (
                <div>
                    <ul>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Formulation Development Lab:</h1>
                            <ol>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Rotary Tablet Compression
                                        Machine: </span>“D”, “B”& “BB” tooling manufactured to meet the
                                        requirement of Research & Development as per
                                        SUPAC (scale up post approval changes) & Pilot
                                        Production.
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Tablet coating pan and Spray
                                        Gun with Air compressor: </span>Loading capacity 1 kg</p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Spheronizer: </span>Loading Capacity Manual Loading of Wet Extrude
                                        Min 10g to Max 100g Output / Hr. 130g / hr
                                        Disc Fitted With Equipment Cross Hatch Pattern 3
                                        MM sq.
                                        Disc Available [Optional] Cross Hatch Pattern 2, 4 & 6
                                        MM sq.
                                        Disc Speed 10 to 1365 RPM. Motor Power 0.09 kw, Dimensions 323x440x510H,
                                        Gross Weight 50 kg.
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">All-purpose equipment with
                                        pelletizer: </span>Coating, pellatization, wet granulation</p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Hot air oven/tray dryer: </span>Temperature Range 5°C above ambient to 250°C maximum</p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Magnetic
                                        Stirrer/Homogeniser/Mechanical
                                        stirrer: </span>MMax capacity=5ltr
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Double cone blender/RMG: </span>Maximum Capacity 1 kg
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">FBP (Fluidized bed processor)
                                        For coating of granules: </span>Cornimach
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Orbital shaker: </span>Shakti engineering’s (24 )
                                    </p>
                                </li>
                                {/* <li className="list-decimal ">
                                    <p>Includes:</p>
                                    <ul>
                                        <span className="font-semibold">Tablet dissolution test
                                                apparatus IP, </span>
                                            <span className="font-semibold">Monsanto’s hardness
                                                tester, </span>
                                            <span className="font-semibold">Pfizer type hardness
                                                tester, </span>
                                            <span className="font-semibold">Friability test apparatus</span>

                                    </ul>
                                </li> */}
                                {/* <li className="list-decimal ">
                                    <p><span className="font-semibold">Rotavap: </span>Evaporating the solvent from extract used in
                                        liposomes/niosomes development
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Muffle Furnace: </span>Max.Temp. around 1100degrees
                                    </p>
                                </li> */}
                                {/* <li className="list-decimal ">
                                    <p><span className="font-semibold">Ultrasonicator bath/probe
                                        sonicator: </span>Used in formulation of nanosuspension &
                                        nanoemulsion
                                    </p>
                                </li> */}
                                {/* <li className="list-decimal ">
                                    <p><span className="font-semibold">Clavenger's: </span>For extracting volatile oils from aromatic drugs
                                    </p>
                                </li> */}
                            </ol>
                        </li>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Analytical Method Development Lab
                            </h1>
                            <ol>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">FT-IR (Shimadzu Affinity-1)</span>Solid powder accessibility using Fourier
                                        transformation Infra red spectrometer with
                                        preparation of samples by KBr-Pelletizer with IR
                                        solution software for Qualitative and Quantitative
                                        analysis</p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">HPLC (Waters)</span>High Pressure pump up to 4000 psi and 1-10 ml
                                        /minute flow rate with C-18 column and amino
                                        column with variable wavelength UV-Visible
                                        detector
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Gas Chromatograph System (GC2010 plus):</span>ab solution software, 230V, Single phase, 50Hz.
                                        Servo Voltage Stabilizer : Capacity - 4 KVA,
                                        Carrier Gas: Nitrogen, Helium or Hydrogen Input
                                        Voltage - 180 to 270 Volts Output Voltage (Earth
                                        to Phase)-230 Volts Earth to Neutral-0 to 3 Volt
                                        AC (earthing)
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Karl Fischer Instrument:</span>Moisture Analysis(Coulometric or Volumetric
                                        titration to determine trace amounts of water in a
                                        sample).
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Chemical Analysis:</span>Milk testing, food adulteration
                                    </p>
                                </li>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Tissue culture:</span>GLP compliance
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li className=" list-disc mx-3 lg:mx-6 my-8 lg:my-20">
                            <h1 className="font-bold text-xl lg:text-2xl my-3">Pharmacology Research lab: </h1>
                            <ol>
                                <li className="list-decimal ">
                                    <p><span className="font-semibold">Behavioral Video tracking Software
                                        (includes morrris water maze, Y maze,
                                        elevated plus maze, open field)
                                        : </span>Behavioral Video tracking Software (includes
                                        morrris water maze, Y maze, elevated plus maze,
                                        open field)
                                    </p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">ELISA (Enzyme-linked immunosorbent
                                        Assay): </span>ELISA is a diagnostic tool that is used to identify
                                        peptides, proteins, antibodies and hormones and is
                                        a very useful tool in biotechnology and help in
                                        diagnosis of biomarkers like cancer markers.</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Stereotaxic Apparatus (SGLM 18DEG): </span>This equipment manipulate the brain of living
                                        animal as it allows to accurately target the drugs/
                                        elctrodes within the deep structures of the brain</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Weswox Fluoroscent microscope: </span>Weswox Fluoroscent microscope
                                        It is used for selectively identifying antigens
                                        (proteins) in cells of a tissue section.
                                        Immunohistochemistry is also widely used in basic
                                        research to understand the distribution and
                                        localization of biomarkers and differentially
                                        expressed proteins in different parts of a biological
                                        tissue.</p>
                                </li>
                                <li className=" list-decimal">
                                    <p><span className="font-semibold">Non Invasive Blood Pressure
                                        Measurement instrument for rat: </span>It is used for intermittent rat blood pressure
                                        measurement based on the periodic occlusion of
                                        tail blood flow. It is used to rest anti-hypertensive
                                        activity of a compound.</p>
                                </li>

                            </ol>
                        </li>
                    </ul>
                </div>
            ),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src={KSOP1}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
const Consult = () => {
    return (
        <div className=" my-[-30px] h-1/3">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Consultancy
                    </div>
                    <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 md:px-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui soluta nobis architecto, dicta autem suscipit tempore, blanditiis sapiente debitis, quod sunt ipsam itaque iste est sit dolorem repellendus veniam porro aspernatur voluptate! Quos temporibus quam ipsa accusantium vero asperiores incidunt rem quisquam nostrum ducimus, ipsum velit ullam optio voluptates doloribus.
                    </div>

                </motion.div>
            </AuroraBackground>
            <div className="flex flex-col lg:flex w-[100vw] lg:w-full justify-center items-center lg:flex-row my-[8%] lg:my-[1%] ">
                <motion.div
                    variants={fadeIn("right")}
                    initial="hidden"
                    whileInView={"show"}
                    className="w-full lg:w-full flex justify-center items-center"
                >
                    <Lottie
                        animationData={lot}
                        loop={true}
                        className="lg:flex w-3/4 lg:w-2/3 opacity-90 ml-[-10px] lg:ml-[-80px]"
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn("left")}
                    initial="hidden"
                    whileInView={"show"}
                    className="dark:text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center "
                >
                    <div className="flex justify-center items-center lg:justify-start">
                        <h2 className="!font-medium !text-2xl md:!text-3xl lg:!text-5xl ">
                            What is <span className="text-[#012060]">Consultancy</span> ?
                        </h2>
                        <TiLightbulb className="ml-2 self-center w-8 h-10" />
                    </div>
                    <p className="!text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] font-medium dark:font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat consequuntur obcaecati iste, dignissimos odit accusamus, porro explicabo quisquam ut laborum impedit. Earum aut culpa libero omnis dolore voluptatem aspernatur!&apos;s generation, and to encourage an entrepreneurial mindset
                        in an aspiring individual to convert their &quot;Drop of an Idea into
                        an Ocean of Reality&quot;.
                    </p>
                    <div className="w-full  flex justify-center items-center lg:justify-start mt-5">
                        <Button color="#012060" />
                    </div>
                </motion.div>
            </div>
            <div className="p-10 lg:block hidden">
                <StickyScroll content={content} />
            </div>
            <div className="content-2 lg:hidden md:block">
                {content.map((item, index) => (
                    <div key={index} className="m-5 flex flex-col items-center justify-center">
                        <div className="title text-xl font-bold p-5 md:text-2xl">
                            {item.title}
                        </div>
                        <div className="image h-60 w-80 rounded-md bg-white top-5   ">
                            {item.content}
                        </div>
                        <div className="description">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Consult
