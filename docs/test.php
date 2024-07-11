<?php 
function twoSum($nums, $target) {
    $numMap = [];
    
    for ($i = 0; $i < count($nums); $i++) {
        $complement = $target - $nums[$i];
        
        if (isset($numMap[$complement])) {
            return [$numMap[$complement], $i];
        }
        
        $numMap[$nums[$i]] = $i;
    }
    
    return [];
}
