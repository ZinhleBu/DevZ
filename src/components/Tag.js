import React from 'react'
import { motion } from "framer-motion";

function Tag({ tag }) {
    return (
        <motion.div 
        whileHover={{ backgroundColor: "#e20001", color: "#ffffff" }}
        className="tag-wrap grid-item">
                {tag.name}
        </motion.div>
    )
}

export default Tag
