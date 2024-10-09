const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="md:w-3/12 mx-auto my-8 text-center font-cinzel">
            <p className="text-yellow-600 mb-2">---{subheading}---</p>
            <h3 className="text-3xl border-y-4 uppercase py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;